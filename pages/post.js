import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts';
import format from 'date-fns/format';
import glamorous from 'glamorous';

import Layout from '../components/Layout';

const Tag = glamorous.a({
  display: 'inline-block',
  textTransform: 'uppercase',
  fontWeight: 500,
  margin: '3px',
  fontSize: '1rem',
  padding: '0px 5px',
  color: '#fff',
  textDecoration: 'none',
  background: '#606c76',
  ':hover': {
    color: 'white',
    background: '#9b4dca'
  }
});

export default class PostPage extends React.Component {
  constructor(props) {
    super();
  }
  static async getInitialProps({ req }) {
    //const { query, params } = query;
    //return params.id;
    console.log('>> params are: ', req.params, req.query, '\naaa\n');
    const git = process.env.npm_package_repository_url
    const filePath = git.replace('git+', '')
      .replace('.git', '/blob/master/posts/');
    console.log(filePath);

    https://github.com/devisscher/blog/blob/master/posts/001-welcome-to-jekyll.md
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
    const { data: post } = await axios.get(
      `${baseURL}/api/posts/${req.params.number}`
    );

    return { post, baseURL, filePath };
  }
  render() {
    const { post = {}, baseURL, filePath } = this.props;
    function TagsList(props) {
      console.log(props);
      const tags = props.tags || [];
      const tagItems = tags.map((tag, index) => (
        <Tag href={`/tags/${tag.toLowerCase()}`} key={index}>{tag}</Tag>
      ));
      return <div>{tagItems}</div>;
    }
    return (
      <Layout>
        <h1>{post.title}</h1>
        <TagsList tags={post.tags} />
        <small style={{ paddingTop: 0 }}>
          {format(parseFloat(post.date), 'MMM Do, YYYY')}
        </small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a href={filePath + post.file}>Typo or correction? Submit a PR :)</a>
      </Layout>
    );
  }
}
