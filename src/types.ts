export type API_KEY = string;

export interface ErrorResponse {
  message: string;
  status: number;
}

export interface ReverseGeocodeParams {
  longitude: number;
  latitude: number;
  district?: boolean;
  post_code?: boolean;
  country?: boolean;
  sub_district?: boolean;
  union?: boolean;
  pauroshova?: boolean;
  location_type?: boolean;
}

export interface ReverseGeocodeResponse {
  id: number;
  distance_within_meters: number;
  address: string;
  area: string;
  location_type?: string;
  city: string;
  district?: string;
  sub_district?: string;
  country?: string;
  postCode?: number;
  union?: string;
  pauroshova?: string;
}

export interface GeocodeParams {
  /* Barikoi Place ID Integer */
  place_id: number;
}

export interface GeocodeResponse {
  id: number;
  address: string;
  area: string;
  city: string;
  postcode: number;
  ucode: string;
  longitude: number;
  latitude: number;
  pType: string;
  subType: string;
}

export interface AutocompleteParams {
  /* The search query */
  q: string;
  /*
   * Here, Latitude and Longitude and Scale are optional parameters.
   * When Latitude and Longitude are provided in the request parameter
   * then the search result is returned based on the provided longitude
   * latitude.When Scale is provided system will search inside the
   * particular area (in Kilometer) radius.
   */
  longitude?: number;
  latitude?: number;
  scale?: number;
}

export interface AutocompletePOParams {
  /* The search query */
  q: string;
}

export interface AutocompleteResponse {
  id: number;
  longitude: string;
  latitude: string;
  address: string;
  city: string;
  area: string;
  postCode: number;
  pType: string;
  uCode: string;
}

export interface CordData {
  longitude: number;
  latitude: number;
}

/** This is needed to get IDE autocomplete on Literal Unions.
 * See: https://github.com/microsoft/TypeScript/issues/29729
 **/
type LiteralUnion<T extends U, U = string> = T | (U & { msPls?: never });

type KnownPlaces =
  | 'admin'
  | 'fuel'
  | 'others'
  | 'agricultural'
  | 'government'
  | 'recreation'
  | 'bank'
  | 'healthcare'
  | 'religious place'
  | 'commercial'
  | 'hotel'
  | 'residential'
  | 'construction'
  | 'industry'
  | 'shop'
  | 'education'
  | 'landmark'
  | 'transportation'
  | 'food'
  | 'office'
  | 'utility';

export type PlaceType = LiteralUnion<KnownPlaces>;

export interface NearbyParams extends CordData {
  /* distance to search in KM) */
  distance: number;
  /* Limit the returned results number */
  limit: number;
  /*
   * Optional - search  nearby places by category.
   * See @https://docs.barikoi.com/docs/nearby/
   */
  ptype?: PlaceType;
  /*
   * Optional - search  nearby places by multiple categories,
   * enter array of caregories
   */
  q?: string[];
}

export interface NearbyResponse {
  id: number;
  name: string;
  distance_in_meters: number;
  longitude: string;
  latitude: string;
  pType: string;
  Address: string;
  area: string;
  city: string;
  postCode: number;
  subType: string;
  uCode: string;
  'ST_AsText(location)': string;
}

export interface DistanceParams {
  form: CordData;
  to: CordData;
}
