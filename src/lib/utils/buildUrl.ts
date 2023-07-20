type QueryParamValue = string | boolean | number | null | undefined;

type BuildURLParams = {
  baseURL?: string;
  pathname: string;
  params?: Record<string, QueryParamValue>;
};

export const buildUrl = ({
  baseURL = '',
  pathname,
  params,
}: BuildURLParams) => {
  const url = new URL(`${baseURL}${pathname}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (!value) {
        return;
      }

      if (Array.isArray(value)) {
        (value as Array<QueryParamValue>).forEach((entry) => {
          url.searchParams.append(key, String(entry));
        });
        return;
      }

      url.searchParams.set(key, String(value));
    });
  }

  return url.toString();
};
