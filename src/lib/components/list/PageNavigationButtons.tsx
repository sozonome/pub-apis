import { Grid, Button } from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

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
      marginY={8}
      gap={8}
    >
      <Button
        disabled={currentPage === 0}
        leftIcon={<AiOutlineArrowLeft />}
        colorScheme="cyan"
        onClick={handleChangePage('prev')}
      >
        Prev
      </Button>
      <Button
        disabled={currentPage === lastPage}
        rightIcon={<AiOutlineArrowRight />}
        colorScheme="yellow"
        onClick={handleChangePage('next')}
      >
        Next
      </Button>
    </Grid>
  );
};

export default PageNavigationButtons;
