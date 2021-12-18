import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

import SearchContainer from "components/search/SearchContainer";
import { useCategoryList } from "services/publicapis/category";
import { trackEventToUmami } from "utils/trackEvent";

import { HomePageProps } from "./types";

const Home = ({ categoryFallbackData }: HomePageProps) => {
  const handleClickAll = () => {
    trackEventToUmami("Home: click see complete list", "navigate");
  };

  const { data: categories } = useCategoryList(categoryFallbackData);

  return (
    <Box mb={8} marginX="auto" maxWidth={800}>
      <SearchContainer categories={categories} />

      <Box marginY={12}>
        <Link href="/all" passHref>
          <Button isFullWidth onClick={handleClickAll}>
            I want to see the complete list
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
