import React from 'react';
import axios from 'axios';
import Tags from '../../components/Tags';

import Layout from '../../components/Layout';

export default class TagsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }
  componentDidMount() {
    this.getTags();
  }
  getTags() {
    axios.get('/api/tags').then((response) => {
      this.setState({ tags: response.data });
    }).catch((err) => {
      this.setState({ tags: [{ tag: err }] });
    });
  }
  render() {
    return (
      <Layout>
        <Tags tags={this.state.tags} />
      </Layout>
    );
  }
}
