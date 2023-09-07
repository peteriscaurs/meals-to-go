import {
  Address,
  Details,
  Icon,
  Info,
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  Row,
} from "./restaurant-info-card.styles";

import Open from '"../../../../assets/open.js';
import Star from '"../../../../assets/star.js';
import React from "react";
import { SvgXml } from "react-native-svg";
import Restaurant1 from "../../../../assets/restaurant1.jpg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

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
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos,
    address,
    isOpenNow,
    isClosedTemporarily = true,
    rating,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating || 0)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={Restaurant1} />
      <Info>
        <Text variant="title">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={Star} width={20} height={20} />
            ))}
          </Rating>
          <Details>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={Open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </Details>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
