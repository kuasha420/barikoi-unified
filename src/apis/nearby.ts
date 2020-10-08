import { API_KEY, NearbyParams, NearbyResponse, ErrorResponse } from '../types';
import { API_ENDPOINT, toQueryString, externalError } from '../utils';

export const nearby = async (apiKey: API_KEY, options: NearbyParams) => {
  const beforeApiKey = 'search/nearby/';

  const { distance, limit, q, ...optns } = options;

  const afterApiKey = `/${distance}/${limit}?`;

  const baseUrl = API_ENDPOINT + beforeApiKey + apiKey + afterApiKey;

  let final;

  if (q) {
    final = { ...optns, q: q.toString() };
  } else {
    final = { ...optns };
  }

  const params = toQueryString(final);

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

    return json.Place as NearbyResponse[];
  } catch (error) {
    throw error as ErrorResponse;
  }
};
