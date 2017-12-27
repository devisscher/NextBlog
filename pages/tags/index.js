import React from 'react';
import axios from 'axios';
import { baseURL } from '../../lib/url';
import Tags from '../../components/Tags';

import Layout from '../../components/Layout';

export default class TagsPage extends React.Component {
  constructor(props) {
    super();
  }
  static async getInitialProps() {
    const { data: tags } = await axios.get(`${baseURL}/api/tags`);
    return { tags };
  }
  render() {
    const { tags = [] } = this.props;
    return (
      <Layout>
        <Tags tags={tags} />
      </Layout>
    );
  }
}
