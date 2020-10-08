import { API_KEY, AutocompleteParams, AutocompleteResponse, ErrorResponse } from '../types';
import { API_ENDPOINT, externalError, toQueryString } from '../utils';

export const autocomplete = async (apiKey: API_KEY, options: AutocompleteParams) => {
  const beforeApiKey = 'search/autocomplete/';
  const afterApiKey = '/place?';

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

    return json.places as AutocompleteResponse[];
  } catch (error) {
    throw error as ErrorResponse;
  }
};
