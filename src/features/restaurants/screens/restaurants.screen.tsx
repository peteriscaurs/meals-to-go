import { FlatList, SafeAreaView, StatusBar } from "react-native";

import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={[
          { id: 1, name: "restaurant1" },
          { id: 2, name: "restaurant2" },
        ]}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large" key={item.id}>
            <RestaurantInfoCard
              name="Stockpot"
              address="Gertrudes iela 8"
              rating={3.2}
              isOpenNow={true}
            />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
