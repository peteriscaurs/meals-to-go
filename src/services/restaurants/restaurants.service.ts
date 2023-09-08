import { Place, PlaceApiResponse } from "./restaurants.types";

import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantsRequest = (
  location = "37.7749295,-122.4194155",
): Promise<PlaceApiResponse> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location as keyof typeof mocks];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

type TransformedPlace = Place & {
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
};

export const restaurantsTransform = ({
  results = [],
}: {
  results: Place[];
}): Promise<TransformedPlace[]> => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
