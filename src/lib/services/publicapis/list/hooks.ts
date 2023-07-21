import type {
  APIListParams,
  APIListResponse,
} from 'lib/services/publicapis/list/types';
import { usePublicAPISWRMutate } from 'lib/services/publicapis/utils';

import { GET_LIST_RESOURCE_PATH } from './constants';

export const useApiList = () =>
  usePublicAPISWRMutate<APIListResponse, APIListParams>({
    path: GET_LIST_RESOURCE_PATH,
  });
