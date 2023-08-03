import { z } from 'zod';

import { apiListParamsSchema } from '@/lib/models/apiParams';

export const searchFormSchema = z.object({
  queryParams: apiListParamsSchema,
});

export type SearchForm = z.infer<typeof searchFormSchema>;
