import React from 'react';
import axios from 'axios';
import Projects from '../../components/Projects';

import Layout from '../../components/Layout';
// Test
export default class Index extends React.Component {
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
    const { data: projects } = await axios.get(`${baseURL}/api/projects`);
    return { projects, baseURL };
  }
  render() {
    const { projects = [], baseURL } = this.props;
    return (
      <Layout>
        <h2>Projects</h2>
        <p>A non exhaustive list of projects I've completed.</p>
        <Projects projects={projects} />
      </Layout>
    );
  }
}
