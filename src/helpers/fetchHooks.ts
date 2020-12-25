import useSWR from "swr";

import { fetcher } from "./fetcher";

const API_URL = `https://api.publicapis.org`;

export const useAPICategories = () => {
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
  cors?: "yes" | "no";
  category?: string;
};

export const useAPIList = (
  shouldFetch: boolean,
  query?: ListQuery,
  isRandom?: boolean
) => {
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
