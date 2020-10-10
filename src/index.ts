import 'cross-fetch/polyfill';
import { autocomplete } from './apis/autocomplete';
import { autocompletePO } from './apis/autocomplete-po';
import { distance } from './apis/distance';
import { geocode } from './apis/geocode';
import { nearby } from './apis/nearby';
import { reverseGeocode } from './apis/reverse-geocode';
import {
  API_KEY,
  AutocompleteParams,
  AutocompletePOParams,
  AutocompleteResponse,
  CordData,
  DistanceParams,
  GeocodeParams,
  GeocodeResponse,
  NearbyParams,
  NearbyResponse,
  ReverseGeocodeParams,
  ReverseGeocodeResponse,
} from './types';

export const Barikoi = (apiKey: API_KEY) => {
  return {
    autocomplete(options: AutocompleteParams): Promise<AutocompleteResponse[]> {
      return autocomplete(apiKey, options);
    },
    autocompletePO(options: AutocompletePOParams): Promise<AutocompleteResponse[]> {
      return autocompletePO(apiKey, options);
    },
    distance(options: DistanceParams): Promise<number> {
      return distance(apiKey, options);
    },
    geocode(options: GeocodeParams): Promise<GeocodeResponse> {
      return geocode(apiKey, options);
    },
    nearby(options: NearbyParams): Promise<NearbyResponse[]> {
      return nearby(apiKey, options);
    },
    reverseGeocode(options: ReverseGeocodeParams): Promise<ReverseGeocodeResponse> {
      return reverseGeocode(apiKey, options);
    },
  };
};

export { autocomplete, autocompletePO, distance, geocode, nearby, reverseGeocode };

export type {
  API_KEY,
  AutocompleteParams,
  AutocompletePOParams,
  CordData,
  DistanceParams,
  GeocodeParams,
  NearbyParams,
  ReverseGeocodeParams,
  AutocompleteResponse,
  GeocodeResponse,
  NearbyResponse,
  ReverseGeocodeResponse,
};

export default {
  Barikoi,
  autocomplete,
  autocompletePO,
  distance,
  geocode,
  nearby,
  reverseGeocode,
};
