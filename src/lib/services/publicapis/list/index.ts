import {
  usePublicApiSWR,
  publicApiFetcher,
} from 'lib/services/publicapis/utils';

import type { APIListParams, APIListResponse } from './types';

const API_LIST_RESOURCE_PATH = (isRandom?: boolean) =>
  `/${isRandom ? 'random' : 'entries'}`;

export const getApiList = (params?: APIListParams, isRandom?: boolean) =>
  publicApiFetcher<APIListResponse>({
    path: API_LIST_RESOURCE_PATH(isRandom),
    params,
  });

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
