import { Page } from '../@types/page';
import Layout from '../modules/layout'

const Home: Page = () => {
  return (
    <div>

    </div>
  );
};

Home.displayName = 'Home Page';

Home.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)

export default Home;