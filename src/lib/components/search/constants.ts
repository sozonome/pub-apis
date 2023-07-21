import type { SearchForm } from 'lib/models/searchForm';

export const INITIAL_VALUES: SearchForm = {
  queryParams: {
    title: '',
    description: '',
    https: false,
    category: '',
  },
};
