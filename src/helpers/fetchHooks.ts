import useSWR from "swr";

import { fetcher } from "./fetcher";

import { ListItem } from "../components/models/list";

const API_URL = `https://api.publicapis.org`;

export type SWRHookResp = {
  isLoading: boolean;
  isError: any;
};

export type CategoryRes = SWRHookResp & {
  data: Array<string>;
};

export const useAPICategories = (): CategoryRes => {
  const { data, error } = useSWR(`${API_URL}/categories`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export type ListQuery = {
  title?: string;
  description?: string;
  auth?: string;
  https?: boolean;
  cors?: "yes" | "no" | "unknown";
  category?: string;
};

export type APIListRes = SWRHookResp & {
  data: {
    count: number;
    entries: Array<ListItem>;
  };
};

export const useAPIList = (
  shouldFetch: boolean,
  query?: ListQuery,
  isRandom?: boolean
): APIListRes => {
  const { data, error } = useSWR(
    [
      shouldFetch ? `${API_URL}/${isRandom ? "random" : "entries"}` : null,
      query,
    ],
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
