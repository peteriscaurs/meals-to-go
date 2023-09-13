import React, { ReactNode, createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

import { Location } from "../restaurants/restaurants.types";

export const LocationContext = createContext<{
  location?: Location;
  isLoading?: boolean;
  error?: Error | null;
  search: (searchKeyword: string) => void;
  keyword: string;
}>({});

export const LocationContextProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState<Location | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
