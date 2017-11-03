import Header from './Header';
import Meta from '../components/meta';
import Footer from '../components/Footer';

const Layout = props => (
  <div>
    <Meta />
    <Header />
    <div className="page">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
