import { API_KEY, GeocodeParams, GeocodeResponse, ErrorResponse } from '../types';
import { API_ENDPOINT, externalError } from '../utils';

export const geocode = async (apiKey: API_KEY, options: GeocodeParams) => {
  const beforeApiKey = 'search/geocode/';
  const afterApiKey = '/place/';

  const baseUrl = API_ENDPOINT + beforeApiKey + apiKey + afterApiKey;

  const params = options.place_id.toString();

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

    const formatted = {
      ...json.place,
      longitude: parseFloat(json.place.longitude),
      latitude: parseFloat(json.place.latitude),
    };

    return formatted as GeocodeResponse;
  } catch (error) {
    throw error as ErrorResponse;
  }
};
