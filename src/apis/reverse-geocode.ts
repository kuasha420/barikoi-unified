import { API_KEY, ErrorResponse, ReverseGeocodeParams, ReverseGeocodeResponse } from '../types';
import { API_ENDPOINT, externalError, toQueryString } from '../utils';

export const reverseGeocode = async (apiKey: API_KEY, options: ReverseGeocodeParams) => {
  const beforeApiKey = 'search/reverse/';
  const afterApiKey = '/geocode?';

  const baseUrl = API_ENDPOINT + beforeApiKey + apiKey + afterApiKey;

  const params = toQueryString(options);

  const url = baseUrl + params;

  try {
    const res = await fetch(url);

    if (res.status !== 200) {
      throw externalError(res);
    }

    const json = await res.json();

    if (json.status !== 200) {
      throw json;
    }

    return json.place as ReverseGeocodeResponse;
  } catch (error) {
    throw error as ErrorResponse;
  }
};
