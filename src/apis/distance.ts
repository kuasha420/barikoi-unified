import { API_KEY, DistanceParams, ErrorResponse } from '../types';
import { API_ENDPOINT, externalError } from '../utils';

export const distance = async (apiKey: API_KEY, options: DistanceParams) => {
  const beforeApiKey = 'distance/';

  const { form, to } = options;

  const afterApiKey = `/${form.longitude},${form.latitude}/${to.longitude},${to.latitude}`;

  const url = API_ENDPOINT + beforeApiKey + apiKey + afterApiKey;

  try {
    const res = await fetch(url);

    if (res.status !== 200) {
      throw externalError(res);
    }

    const json = await res.json();

    if (json.status !== 200) {
      throw json;
    }

    return parseFloat(json.Distance);
  } catch (error) {
    throw error as ErrorResponse;
  }
};
