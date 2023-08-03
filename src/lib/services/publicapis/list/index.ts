import { API_URL } from '@/lib/services/publicapis/constants';
import { buildUrl } from '@/lib/utils/buildUrl';

import { GET_LIST_RESOURCE_PATH } from './constants';
import type { APIListParams, APIListResponse } from './types';

export const getApiList = async (params?: APIListParams) => {
  const url = buildUrl({
    baseURL: API_URL,
    pathname: GET_LIST_RESOURCE_PATH,
    params,
  });
  const res = await fetch(url, { next: { revalidate: 86400 } });

  return res.json() as Promise<APIListResponse>;
};
