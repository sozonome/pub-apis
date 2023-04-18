import type { GetStaticProps } from 'next';

import { getApiList } from 'lib/services/publicapis/list';

import type { APIListPageProps } from './types';

export const getStaticProps: GetStaticProps<APIListPageProps> = async () => {
  const fallbackData = await getApiList();

  return {
    props: {
      fallbackData,
    },
    revalidate: 86400,
  };
};
