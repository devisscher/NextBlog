import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts';
import Layout from '../components/Layout';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

export default class Index extends React.Component {
  static async getInitialProps() {
    const { data: posts } = await axios.get(`${BASE_URL}/api/posts`);
    return { posts, BASE_URL };
  }
  render() {
    const { posts = [] } = this.props;
    return (
      <Layout>
        <h2 className="page-header">Home</h2>
        <h2>{this.props.BASE_URL}</h2>
        <Posts posts={posts} />
      </Layout>
    );
  }
}
