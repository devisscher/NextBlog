import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts';
import Layout from '../components/Layout';

import { getBaseUrl } from '../lib/url';

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const { data: posts } = await axios.get('http://localhost:3000/api/posts');
    return { posts };
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { posts = [] } = this.props;
    console.log('the props are: ', this.props);
    return (
      <Layout>
        <h2 className="page-header">Home</h2>
        <h2>{this.props.site}</h2>
        <Posts posts={posts} />
      </Layout>
    );
  }
}
