/* eslint-disable @typescript-eslint/no-explicit-any */
import useSWR from "swr";

import { SWRHookResponse } from "types/SWRHook";
import { fetcher } from "utils/fetcher";

import { API_URL } from "./constants";

export const publicApiFetcher = <ResType>(path: string, params?: any) =>
  fetcher<ResType>(`${API_URL}${path}`, params);

export const usePublicApiSWR = <ResType>(
  path: string,
  params?: any,
  fallbackData?: ResType,
  isReady = true
): SWRHookResponse<ResType> => {
  const { data, error, mutate } = useSWR<ResType>(
    [path, params],
    isReady ? publicApiFetcher : null,
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
