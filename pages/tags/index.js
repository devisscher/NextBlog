import React from 'react';
import axios from 'axios';
import Tags from '../../components/Tags';

import Layout from '../../components/Layout';

export default class TagsPage extends React.Component {
  constructor(props) {
    super();
  }
  static async getInitialProps({ req }) {
    const protocol =
      req && req.headers.host.indexOf('localhost') > -1
        ? 'http'
        : req ? req.protocol : '';
    const baseURL = req
      ? `${protocol}://${req.headers.host}`
      : window.location.origin;
    const { data: tags } = await axios.get(`${baseURL}/api/tags`);
    return { tags, baseURL };
  }
  render() {
    const { tags = [], baseURL } = this.props;
    return (
      <Layout>
        <Tags tags={tags} />
      </Layout>
    );
  }
}
