import React from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import kebabCase from 'kebab-case';
import Layout from '../../components/Layout';
import Posts from '../../components/Posts';

export default class TagPage extends React.Component {
  constructor(props) {
    super();
  }
  static async getInitialProps({ req }) {
    //const { query, params } = query;
    //return params.id;
    console.log('>> params are: ', req.params, req.query, '\naaa\n');
    // console.log('referer', urlSplit);
    // console.log('postId', postId);
    const protocol =
      req && req.headers.host.indexOf('localhost') > -1
        ? 'http'
        : req ? req.protocol : '';
    // const urlSplit = window.location.href.split('/');
    // const postId = urlSplit[urlSplit.length - 2];
    const baseURL = req
      ? `${protocol}://${req.headers.host}`
      : window.location.origin;
    const tag = req.params.tag.toUpperCase();
    const { data: posts } = await axios.get(
      `${baseURL}/api/tag/${req.params.tag}`
    );

    console.log(`${baseURL}/api/tag/${req.params.tag}`);
    return { tag, posts, baseURL };
  }
  render() {
    const { tag, posts = [], baseURL } = this.props;
    return (
      <Layout>
        <h1>{tag}</h1>
        <Posts posts={posts} />
      </Layout>
    );
  }
}
