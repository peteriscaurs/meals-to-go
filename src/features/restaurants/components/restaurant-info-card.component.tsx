import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import restaurant1 from "../../../../assets/restaurant1.jpg";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const Title = styled.Text`
  padding: 16px;
`;

interface RestaurantInfoProps {
  name?: string;
  icon?: string;
  photos?: string[];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
}

const RestaurantInfoCard = (restaurant: RestaurantInfoProps) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    isClosedTemporarily,
    rating,
  } = restaurant;
  return (
    <RestaurantCard>
      <RestaurantCardCover source={restaurant1} />
      <Title>
        {name}: {address}
      </Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
