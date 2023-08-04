/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import type { SWRHookResponse } from '@/lib/types/SWRHook';
import { fetcher } from '@/lib/utils/fetcher';

import { API_URL } from './constants';

type PublicApiFetcherParams = {
  path: string;
  params?: any;
};

export const publicApiFetcher = <ResType>({
  path,
  params,
}: PublicApiFetcherParams) => fetcher<ResType>(`${API_URL}${path}`, params);

export const usePublicApiSWR = <ResType>(
  path: string,
  params?: any,
  fallbackData?: ResType,
  isReady = true
): SWRHookResponse<ResType> => {
  const { data, error, isLoading, mutate } = useSWR<ResType>(
    isReady ? { path, params } : null,
    publicApiFetcher,
    {
      fallbackData,
    }
  );

  return {
    data,
    isLoading,
    isError: error,
    mutate,
  };
};

type UsePublicAPISWRMutate = {
  path: string;
};

export const usePublicAPISWRMutate = <ResType, Params>({
  path,
}: UsePublicAPISWRMutate) => {
  const { data, trigger, isMutating, reset } = useSWRMutation<
    ResType,
    unknown,
    string,
    Params
  >(path, (pathname, { arg }) =>
    publicApiFetcher({ path: pathname, params: arg })
  );

  return {
    data,
    trigger,
    isMutating,
    reset,
  };
};
