import { GetStaticProps } from "next";

import { getCategoryList } from "services/publicapis/category";

import { HomePageProps } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const categoryFallbackData = await getCategoryList();

    return {
      props: {
        categoryFallbackData,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
