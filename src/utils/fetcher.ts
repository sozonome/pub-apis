import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = (url: string, query: any) =>
  axios.get(url, { params: query }).then((res) => res.data);
