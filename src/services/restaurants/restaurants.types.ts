export interface Location {
  lat: number;
  lng: number;
}

export interface Geometry {
  location: Location;
  viewport: {
    northeast: Location;
    southwest: Location;
  };
}

interface OpeningHours {
  openNow: boolean;
}

interface PlusCode {
  compoundCode: string;
  globalCode: string;
}

interface Photo {}

export interface Place {
  businessStatus: string;
  geometry: Geometry;
  icon?: string;
  isClosedTemporarily: boolean;
  isOpenNow: boolean;
  ix?: string;
  name: string;
  openingHours: OpeningHours;
  photos: Photo[];
  placeId: string;
  plusCode: PlusCode;
  priceLevel: number;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  userRatingsTotal: number;
  vicinity: string;
  permanentlyClosed?: boolean;
}

export interface PlaceApiResponse {
  html_attributions: string[];
  next_page_token: string;
  results: Place[];
  status: string;
}
