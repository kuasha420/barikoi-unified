import { API_KEY, AutocompletePOParams, AutocompleteResponse, ErrorResponse } from '../types';
import { API_ENDPOINT, toQueryString, externalError } from '../utils';

export const autocompletePO = async (apiKey: API_KEY, options: AutocompletePOParams) => {
  const beforeApiKey = 'search/autocomplete/';
  const afterApiKey = '/place?';

  const baseUrl = API_ENDPOINT + beforeApiKey + apiKey + afterApiKey;

  const params = toQueryString({ ...options, post_office: true });

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
