import type { GetStaticProps } from 'next';

import { getCategoryList } from 'lib/services/publicapis/category';

import type { HomePageProps } from './types';

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const categoryFallbackData = await getCategoryList();

    return {
      props: {
        categoryFallbackData,
      },
      revalidate: 86400,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
