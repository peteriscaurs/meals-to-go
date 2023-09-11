import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  TransformedPlace,
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext<{
  restaurants?: TransformedPlace[];
  isLoading?: boolean;
  error?: Error | null;
}>({});

export const RestaurantsContextProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [restaurants, setRestaurants] = useState<TransformedPlace[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
