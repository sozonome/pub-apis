import { notFound } from 'next/navigation';

import APIListPage from '@/lib/pages/all';

const AllAPIPage = async () => {
  // const data = await getApiList();

  // TEMPORARY, remove this when ready
  notFound();

  return <APIListPage />;
};

export default AllAPIPage;
