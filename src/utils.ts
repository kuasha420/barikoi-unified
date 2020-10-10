import { ErrorResponse } from './types';

export const API_ENDPOINT = 'https://barikoi.xyz/v1/api/';

export const toQueryString = (obj: object) => {
  const keyValuePairs = [];
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    if (typeof Object.values(obj)[i] === 'undefined') {
      continue;
    }
    keyValuePairs.push(
      `${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`
    );
  }
  return keyValuePairs.join('&');
};

export const externalError = (res: Response): ErrorResponse => ({
  message: 'Not Valid Response',
  status: res.status,
});
