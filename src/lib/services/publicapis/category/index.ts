import { API_URL } from '@/lib/services/publicapis/constants';
import { buildUrl } from '@/lib/utils/buildUrl';

import type { CategoryResponse } from './types';

export const CATEGORY_RESOURCE_PATH = '/categories';

export const getCategoryList = async () => {
  const url = buildUrl({ baseURL: API_URL, pathname: CATEGORY_RESOURCE_PATH });
  const res = await fetch(url, {
    next: { revalidate: 86400 },
  });

  return res.json() as Promise<CategoryResponse>;
};
