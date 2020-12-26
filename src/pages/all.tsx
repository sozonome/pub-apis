import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

import ItemContainer from "../components/item/ItemContainer";
import { ListItem } from "../components/models/list";

import { useAPIList } from "../helpers/fetchHooks";

const ITEM_PER_PAGE = 20;

const All = () => {
  const { data, isLoading } = useAPIList(true);

  const [sortedData, setSortedData] = useState<Array<ListItem>>([]);
  const [pagedData, setPagedData] = useState<Array<Array<ListItem>>>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [keyword, setKeyword] = useState<string>("");
  const [filteredData, setFiltedData] = useState<Array<ListItem>>([]);

  const paginateData = () => {
    const totalPage = Math.ceil(
      (keyword.length ? filteredData.length : sortedData.length) / ITEM_PER_PAGE
    );
    const updatePagedData: Array<Array<ListItem>> = [];

    for (let i = 0; i < totalPage; i++) {
      const start = i * ITEM_PER_PAGE;
      const end =
        i === totalPage - 1
          ? i * ITEM_PER_PAGE +
            ((keyword.length ? filteredData.length : sortedData.length) -
              i * ITEM_PER_PAGE)
          : (i + 1) * ITEM_PER_PAGE;

      const currentPageData: Array<ListItem> = [];

      for (let j = start; j < end; j++) {
        currentPageData.push(
          keyword.length && filteredData.length
            ? filteredData[j]
            : sortedData[j]
        );
      }

      updatePagedData.push(currentPageData);
    }

    setPagedData(updatePagedData);
  };

  const filterData = () => {
    const kword = keyword.toLowerCase();
    const updateFilteredData = sortedData.filter(
      (data) =>
        data.API.toLowerCase().indexOf(kword) > -1 ||
        data.Description.toLowerCase().indexOf(kword) > -1
    );

    setFiltedData(updateFilteredData);
  };

  useEffect(() => {
    if (data?.entries) {
      const updateSortedData =
        data &&
        data.entries.sort((a, b) => {
          if (a.API < b.API) {
            return -1;
          }
          if (a.API > b.API) {
            return 1;
          }
          return 0;
        });
      setSortedData(updateSortedData);
    }
  }, [data]);

  useEffect(() => {
    paginateData();
  }, [sortedData, filteredData]);

  useEffect(() => {
    if (keyword.length) {
      filterData();
      setCurrentPage(0);
    } else {
      paginateData();
    }
  }, [keyword]);

  const handleChangePage = (type: "next" | "prev") => () => {
    const updatePageNumber =
      type === "next" ? currentPage + 1 : currentPage - 1;
    setCurrentPage(updatePageNumber);
    window.scrollTo(0, 0);
  };

  const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const pageNavigationButtonsProps: PageNavigationButtonsProps = {
    currentPage,
    handleChangePage,
    totalPage: pagedData.length - 1,
  };

  return (
    <Box>
      <Link href="/" passHref>
        <Button isFullWidth size="lg" marginBottom={8}>
          Search
        </Button>
      </Link>
      <Skeleton isLoaded={!isLoading} minHeight="80vh">
        <FormControl>
          <Input
            type="text"
            placeholder="quick search"
            size="lg"
            onChange={handleChangeKeyword}
          />
        </FormControl>
        <PageNavigationButtons {...pageNavigationButtonsProps} />
        {pagedData[currentPage]?.length ? (
          <ItemContainer
            entries={pagedData[currentPage]}
            useAccordion={false}
          />
        ) : null}
        <PageNavigationButtons {...pageNavigationButtonsProps} />
      </Skeleton>
    </Box>
  );
};

type PageNavigationButtonsProps = {
  currentPage: number;
  handleChangePage: (type: "next" | "prev") => () => void;
  totalPage: number;
};

const PageNavigationButtons = ({
  currentPage,
  handleChangePage,
  totalPage,
}: PageNavigationButtonsProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" marginY={4} gap={2}>
      <Button disabled={currentPage === 0} onClick={handleChangePage("prev")}>
        Prev
      </Button>
      <Button
        disabled={currentPage === totalPage}
        onClick={handleChangePage("next")}
      >
        Next
      </Button>
    </Grid>
  );
};

export default All;
