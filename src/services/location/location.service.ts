import { Geometry, Location } from "../restaurants/restaurants.types";

import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (
  searchTerm: string,
): Promise<{ geometry: Geometry }> => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm as keyof typeof locations];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: { geometry: Geometry }): Location => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
