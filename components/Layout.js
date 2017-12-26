import React from 'react'
import Header from './Header';
import Meta from '../components/meta';
import Footer from '../components/Footer';
import axios from 'axios';

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
        </div>
        <Footer />
      </div>
    )
  }
}
