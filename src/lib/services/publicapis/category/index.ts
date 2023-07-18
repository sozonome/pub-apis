import { API_URL } from 'lib/services/publicapis/constants';
import { usePublicApiSWR } from 'lib/services/publicapis/utils';

import type { CategoryResponse } from './types';

const CATEGORY_RESOURCE_PATH = '/categories';

export const getCategoryList = async () => {
  const res = await fetch(`${API_URL}${CATEGORY_RESOURCE_PATH}`, {
    next: { revalidate: 86400 },
  });

  return res.json() as Promise<CategoryResponse>;
};

export const useCategoryList = (fallbackData?: CategoryResponse) =>
  usePublicApiSWR<CategoryResponse>(
    CATEGORY_RESOURCE_PATH,
    undefined,
    fallbackData
  );
