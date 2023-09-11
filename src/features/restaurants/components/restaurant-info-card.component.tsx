import React, { Key } from "react";
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
import { ImageSourcePropType } from "react-native";
import { SvgXml } from "react-native-svg";
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
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", // can throw an error
    photos,
    address,
    isOpenNow,
    rating,
  } = restaurant;

  const ratingArray = Array.from(
    { length: rating as number },
    (_, index) => index + 1,
  );

  return (
    <RestaurantCard>
      <RestaurantCardCover source={photos as ImageSourcePropType} />
      <Info>
        <Text variant="title">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((i) => (
              <SvgXml xml={Star} width={20} height={20} key={i as Key} />
            ))}
          </Rating>
          <Details>
            <Spacer position="left" size="large">
              {isOpenNow ? (
                <SvgXml xml={Open} width={20} height={20} />
              ) : (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
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
