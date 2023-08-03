import { Grid } from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import { Button } from '@/lib/components/ui/button';

export type PageNavigationButtonsProps = {
  currentPage: number;
  handleChangePage: (type: 'next' | 'prev') => () => void;
  lastPage: number;
};

const PageNavigationButtons = ({
  currentPage,
  handleChangePage,
  lastPage,
}: PageNavigationButtonsProps) => {
  return (
    <Grid
      hidden={lastPage <= 0}
      templateColumns="repeat(2, 1fr)"
      marginY={4}
      gap={4}
    >
      <Button disabled={currentPage === 0} onClick={handleChangePage('prev')}>
        <AiOutlineArrowLeft />
        Prev
      </Button>
      <Button
        disabled={currentPage === lastPage}
        onClick={handleChangePage('next')}
      >
        Next
        <AiOutlineArrowRight />
      </Button>
    </Grid>
  );
};

export default PageNavigationButtons;
