import React from 'react';
import axios from 'axios';
import Tags from '../../components/Tags';
import Layout from '../../components/Layout';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

export default class TagsPage extends React.Component {
  static async getInitialProps({ req }) {
    const { data: tags } = await axios.get(`${BASE_URL}/api/tags`);
    return { tags };
  }
  // componentDidMount() {
  //   this.getTags();
  // }
  // getTags() {
  //   axios.get('/api/tags').then((response) => {
  //     this.setState({ tags: response.data });
  //   }).catch((err) => {
  //     this.setState({ tags: [{ tag: err }] });
  //   });
  // }

  render() {
    const { tags } = this.props;
    return (
      <Layout>
        <h2>All tags</h2>
        <Tags tags={tags} />
      </Layout>
    );
  }
}
