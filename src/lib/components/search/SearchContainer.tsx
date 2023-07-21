'use client';

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Skeleton,
  Stack,
  Tag,
  Text,
  useToast,
} from '@chakra-ui/react';
import pickBy from 'lodash/pickBy';
import { useForm } from 'react-hook-form';
import { FaFilter } from 'react-icons/fa';

import ItemContainer from 'lib/components/item/ItemContainer';
import { INITIAL_VALUES } from 'lib/components/search/constants';
import type { SearchForm } from 'lib/models/searchForm';
import { useApiList } from 'lib/services/publicapis/list/hooks';

import type { SearchContainerProps } from './types';

const SearchContainer = ({ categories }: SearchContainerProps) => {
  const toast = useToast();

  const {
    data: searchResult,
    isMutating: isLoadingSearchResult,
    trigger: searchAPI,
    reset: resetList,
  } = useApiList();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isValid, isDirty },
  } = useForm<SearchForm>({
    defaultValues: INITIAL_VALUES,
    mode: 'onChange',
  });

  const title = watch('queryParams.title');
  const searchButtonDisabled = !isDirty || !isValid || !title;

  const [description, category, https] = watch([
    'queryParams.description',
    'queryParams.category',
    'queryParams.https',
  ]);

  const processSearch = async (values: SearchForm) => {
    const queries = pickBy(values.queryParams);
    await searchAPI(queries).catch(() => {
      toast.closeAll();
      toast({
        position: 'top',
        title: 'Error',
        description:
          'Error fetching data. Check your internet connection and try to refresh the page.',
        status: 'error',
        isClosable: true,
        duration: 10000,
      });
    });
  };

  const handleReset = () => {
    reset(INITIAL_VALUES);
    resetList();
  };
  const handleSearch = handleSubmit(processSearch);

  return (
    <>
      <Stack marginBottom={4}>
        <Stack direction="row" gap={2}>
          <FormControl>
            <Input
              {...register('queryParams.title')}
              type="text"
              placeholder="search API name"
              fontWeight="semibold"
              size="lg"
            />
          </FormControl>

          <Popover>
            <PopoverTrigger>
              <IconButton
                size="lg"
                aria-label="filter search"
                icon={<FaFilter />}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Filter</PopoverHeader>
              <PopoverBody>
                <Stack spacing={2}>
                  <Box>
                    <FormControl>
                      <Input
                        {...register('queryParams.description')}
                        type="text"
                        borderRadius={12}
                        placeholder="search API description"
                        size="md"
                      />
                    </FormControl>
                  </Box>

                  <Box>
                    <FormControl>
                      <Select
                        {...register('queryParams.category')}
                        placeholder="Select Category ..."
                      >
                        {categories?.map((categoryItem: string) => (
                          <Text as="option" key={categoryItem}>
                            {categoryItem}
                          </Text>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>

                  <FormControl alignItems="center">
                    <Checkbox {...register('queryParams.https')}>
                      Support HTTPs
                    </Checkbox>
                  </FormControl>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>

        <HStack gap={2} height={8}>
          {description ? <Tag>{description}</Tag> : null}
          {category ? <Tag colorScheme="cyan">{category}</Tag> : null}
          {https ? <Tag colorScheme="teal">HTTPs</Tag> : null}
        </HStack>
      </Stack>

      <Grid templateColumns="2fr 1fr" gap={4}>
        <Button
          isDisabled={searchButtonDisabled}
          width="full"
          onClick={handleSearch}
          isLoading={isLoadingSearchResult}
        >
          Search
        </Button>
        <Button isDisabled={!isDirty} width="full" onClick={handleReset}>
          Reset
        </Button>
      </Grid>

      <Skeleton isLoaded={!isLoadingSearchResult} marginY={4}>
        {searchResult?.entries ? (
          <ItemContainer
            entries={searchResult.entries}
            templateColumns="repeat(1)"
          />
        ) : null}
        {searchResult?.entries?.length === 0 ? (
          <Text textAlign="center">Not Found</Text>
        ) : null}
      </Skeleton>
    </>
  );
};

export default SearchContainer;
