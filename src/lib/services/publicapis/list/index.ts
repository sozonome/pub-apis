import { API_URL } from 'lib/services/publicapis/constants';
import { usePublicApiSWR } from 'lib/services/publicapis/utils';
import { buildUrl } from 'lib/utils/buildUrl';

import type { APIListParams, APIListResponse } from './types';

const API_LIST_RESOURCE_PATH = (isRandom?: boolean) =>
  `/${isRandom ? 'random' : 'entries'}`;

export const getApiList = async (
  params?: APIListParams,
  isRandom?: boolean
) => {
  const url = buildUrl({
    baseURL: API_URL,
    pathname: API_LIST_RESOURCE_PATH(isRandom),
    params,
  });
  const res = await fetch(url, { next: { revalidate: 86400 } });

  return res.json() as Promise<APIListResponse>;
};

export const useApiList = (
  params?: APIListParams,
  isRandom?: boolean,
  fallbackData?: APIListResponse,
  isReady?: boolean
) =>
  usePublicApiSWR<APIListResponse>(
    API_LIST_RESOURCE_PATH(isRandom),
    params,
    fallbackData,
    isReady
  );
