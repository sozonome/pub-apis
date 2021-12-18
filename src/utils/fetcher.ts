/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";

export const fetcher = <ResType>(url: string, params?: any) =>
  axios.get(url, { params }).then((res: AxiosResponse<ResType>) => res.data);
