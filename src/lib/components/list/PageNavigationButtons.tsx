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
    <div className="my-4 grid grid-cols-2 gap-4" hidden={lastPage <= 0}>
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
    </div>
  );
};

export default PageNavigationButtons;
