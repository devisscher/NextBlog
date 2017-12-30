import React from 'react';
import axios from 'axios';
import Tags from '../../components/Tags';

import Layout from '../../components/Layout';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

export default class TagsPage extends React.Component {
  constructor(props) {
    super();
  }
  static async getInitialProps() {
    const { data: tags } = await axios.get(`${BASE_URL}/api/tags`);
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
