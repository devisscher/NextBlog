import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts';
import Layout from '../components/Layout';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    axios.get('/api/posts').then((response) => {
      this.setState({ posts: response.data });
    }).catch((err) => {
      this.setState({ posts: [{ title: `No posts found. ${err}` }] });
    });
  }
  render() {
    return (
      <Layout>
        <h2 className="page-header">Home</h2>
        <Posts posts={this.state.posts} />
      </Layout>
    );
  }
}
