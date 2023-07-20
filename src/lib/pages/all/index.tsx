'use client';

import { Box, Button, FormControl, Input } from '@chakra-ui/react';
import chunk from 'lodash/chunk';
import debounce from 'lodash/debounce';
import Link from 'next/link';
import type { ChangeEvent } from 'react';
import { useCallback, useMemo, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import ItemContainer from 'lib/components/item/ItemContainer';
import type { PageNavigationButtonsProps } from 'lib/components/list/PageNavigationButtons';
import PageNavigationButtons from 'lib/components/list/PageNavigationButtons';

import type { APIListPageProps } from './types';

const ITEM_PER_PAGE = 24;

const APIListPage = ({ data }: APIListPageProps) => {
  const sortedData = useMemo(() => {
    if (!data?.entries) {
      return [];
    }

    return data.entries.sort((a, b) => {
      if (a.API < b.API) {
        return -1;
      }
      if (a.API > b.API) {
        return 1;
      }
      return 0;
    });
  }, [data]);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>('');

  const paginatedData = useMemo(() => {
    const filteredData = sortedData.filter((entry) => {
      if (!keyword) {
        return true;
      }

      return (
        entry.API.toLowerCase().indexOf(keyword) > -1 ||
        entry.Description.toLowerCase().indexOf(keyword) > -1
      );
    });

    return chunk(filteredData, ITEM_PER_PAGE);
  }, [keyword, sortedData]);

  const handleChangePage = useCallback(
    (type: 'next' | 'prev') => () => {
      const updatePageNumber =
        type === 'next' ? currentPage + 1 : currentPage - 1;
      setCurrentPage(updatePageNumber);
      window.scrollTo(0, 0);
    },
    [currentPage]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChangeKeyword = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value.toLowerCase());
      if (currentPage !== 0) {
        setCurrentPage(0);
      }
    }, 200),
    [currentPage]
  );

  const pageNavigationButtonsProps: PageNavigationButtonsProps = useMemo(
    () => ({
      currentPage,
      handleChangePage,
      lastPage: paginatedData.length - 1,
    }),
    [currentPage, handleChangePage, paginatedData.length]
  );

  return (
    <Box>
      <Button
        as={Link}
        href="/"
        width="full"
        leftIcon={<AiOutlineArrowLeft />}
        size="lg"
        marginBottom={8}
      >
        back
      </Button>
      <FormControl>
        <Input
          type="text"
          placeholder="quick search"
          size="lg"
          onChange={handleChangeKeyword}
        />
      </FormControl>
      <PageNavigationButtons {...pageNavigationButtonsProps} />
      {paginatedData[currentPage]?.length ? (
        <ItemContainer entries={paginatedData[currentPage]} />
      ) : null}
      <PageNavigationButtons {...pageNavigationButtonsProps} />
    </Box>
  );
};

export default APIListPage;
