import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Row = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const Details = styled.View`
  flex-direction: row;
`;

export const Address = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.body};
`;
