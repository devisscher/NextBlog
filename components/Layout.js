import React from 'react';
import AdSense from 'react-adsense';

import Header from './Header';
import Meta from '../components/meta';
import Footer from '../components/Footer';
import SideBar from '../components/Sidebar'

const Layout = props => (
  <div>
    <Meta />
    <Header />
    <div className="page">
      {props.children}
      <AdSense.Google
        client="ca-pub-8615534749322314"
        style={{
          display: 'block', width: '100%', height: '200px', backgroundColor: 'white',
        }}
        slot=""
        format=""
      />
    </div>
    <SideBar />
    <Footer />
  </div>
);
export default Layout;
