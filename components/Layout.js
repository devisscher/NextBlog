import React from 'react'
import Header from './Header';
import Meta from '../components/meta';
import Footer from '../components/Footer';
import axios from 'axios';
import AdSense from 'react-adsense';

export default class Layout extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 'home'
    };
  }
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <div className="page">
          {this.props.children}
          <AdSense.Google client='ca-pub-8615534749322314'
            style={{ display: 'block', width: '100%', height: '200px', backgroundColor: 'white' }}
            slot=''
            format='' />
        </div>
        <Footer />
      </div>
    )
  }
}
