import APIListPage from 'lib/pages/all';
import { getApiList } from 'lib/services/publicapis/list';

const AllAPIPage = async () => {
  const data = await getApiList();

  return <APIListPage data={data} />;
};

export default AllAPIPage;
