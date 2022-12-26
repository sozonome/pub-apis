/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";

import type { SWRHookResponse } from "lib/types/SWRHook";
import { fetcher } from "lib/utils/fetcher";

import { API_URL } from "./constants";

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
  const { data, error, mutate } = useSWR<ResType>(
    isReady ? { path, params } : null,
    publicApiFetcher,
    {
      fallbackData,
    }
  );

  return {
    data,
    isLoading: isReady && !error && !data,
    isError: error,
    mutate,
  };
};
