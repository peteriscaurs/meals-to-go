import { SafeAreaView, StatusBar } from "react-native";

import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
      <RestaurantListContainer>
        <RestaurantInfoCard name="Terapija" address="Skolas iela 8" />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;
