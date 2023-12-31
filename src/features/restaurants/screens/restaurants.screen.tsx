import React, { useContext } from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";

import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { TransformedPlace } from "../../../services/restaurants/restaurants.service";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const StyledActivityIndicator = styled(ActivityIndicator)`
  margin-top: ${(props) => props.theme.space[5]};
`;

const ErrorText = styled(Text)`
  text-align: center;
  margin-top: ${(props) => props.theme.space[5]};
`;

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading && (
        <StyledActivityIndicator
          size={50}
          animating={true}
          color={colors.brand.primary}
        />
      )}
      {error && <ErrorText variant="body">Failed to load data.</ErrorText>}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }: { item: TransformedPlace }) => (
          <Spacer position="bottom" size="large" key={item.placeId}>
            <RestaurantInfoCard
              name={item.name}
              address={item.vicinity}
              rating={item.rating}
              photos={item.photos}
              isOpenNow={item.isOpenNow}
              icon={item.icon}
            />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
