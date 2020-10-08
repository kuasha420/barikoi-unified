import 'cross-fetch/polyfill';
import {
  API_KEY,
  AutocompleteParams,
  AutocompletePOParams,
  DistanceParams,
  GeocodeParams,
  NearbyParams,
  ReverseGeocodeParams,
  AutocompleteResponse,
  GeocodeResponse,
  NearbyResponse,
  ReverseGeocodeResponse,
} from './types';

import { autocomplete } from './apis/autocomplete';
import { autocompletePO } from './apis/autocomplete-po';
import { distance } from './apis/distance';
import { geocode } from './apis/geocode';
import { nearby } from './apis/nearby';
import { reverseGeocode } from './apis/reverse-geocode';

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
