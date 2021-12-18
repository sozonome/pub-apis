import { GetStaticProps } from "next";

import { getApiList } from "services/publicapis/list";

import { APIListPageProps } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const getStaticProps: GetStaticProps<APIListPageProps> = async () => {
  try {
    const fallbackData = await getApiList();

    return {
      props: {
        fallbackData,
      },
      revalidate: 60,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
