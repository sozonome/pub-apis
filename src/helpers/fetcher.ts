import axios from "axios";

export const fetcher = (url: string, query: any) =>
  axios.get(url, { params: query }).then((res) => res.data);
