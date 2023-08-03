import Home from '@/lib/pages/home';
import { getCategoryList } from '@/lib/services/publicapis/category';

const HomePage = async () => {
  const categoryData = await getCategoryList();

  return <Home categoryData={categoryData} />;
};

export default HomePage;
