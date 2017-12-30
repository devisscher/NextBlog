import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts';
import format from 'date-fns/format';
import glamorous from 'glamorous';

import Layout from '../components/Layout';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

const Tag = glamorous.a({
  display: 'inline-block',
  textTransform: 'uppercase',
  fontWeight: 500,
  marginRight: '3px',
  fontSize: '1rem',
  padding: '0px 5px',
  color: '#fff',
  textDecoration: 'none',
  background: '#606c76',
  ':hover': {
    color: 'white',
    background: '#9b4dca',
  },
});

export default class PostPage extends React.Component {
  static async getInitialProps({ req }) {
    const git = process.env.npm_package_repository_url;
    const filePath = git.replace('git+', '')
      .replace('.git', '/blob/master/posts/');
    const { data: post } = await axios.get(`${BASE_URL}/api/posts/${req.params.number}`);
    return { post, filePath };
  }
  render() {
    const { post = {}, filePath } = this.props;
    function TagsList(props) {
      const tags = props.tags || [];
      const tagItems = tags.map((tag, index) => (
        <Tag href={`/tags/${tag.toLowerCase()}`} key={index}>{tag}</Tag>
      ));
      return <div>{tagItems}</div>;
    }
    return (
      <Layout>
        <h2 className="page-header">{post.title}</h2>
        <small style={{ paddingTop: 0 }}>
          {format(parseFloat(post.date), 'MMM Do, YYYY')}
        </small>
        <TagsList tags={post.tags} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a href={filePath + post.file}>Typo or correction? Submit a PR :)</a>
      </Layout>
    );
  }
}
