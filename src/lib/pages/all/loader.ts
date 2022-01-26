import type { GetStaticProps } from "next";

import { getApiList } from "lib/services/publicapis/list";

import type { APIListPageProps } from "./types";

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
