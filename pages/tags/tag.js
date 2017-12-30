import React from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import kebabCase from 'kebab-case';
import Layout from '../../components/Layout';
import Posts from '../../components/Posts';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

export default class TagPage extends React.Component {
  static async getInitialProps({ req }) {
    const tag = req.params.tag.toUpperCase();
    const { data: posts } = await axios.get(`${BASE_URL}/api/tag/${req.params.tag}`);
    return { tag, posts };
  }
  render() {
    const { tag, posts = [] } = this.props;
    return (
      <Layout>
        <h1>{tag}</h1>
        <Posts posts={posts} />
      </Layout>
    );
  }
}
