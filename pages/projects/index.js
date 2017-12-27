import React from 'react';
import axios from 'axios';
import { baseURL } from '../../lib/url';
import Projects from '../../components/Projects';

import Layout from '../../components/Layout';
// Test
export default class Index extends React.Component {
  constructor(props) {
    super();
  }
  static async getInitialProps() {
    const { data: projects } = await axios.get(`${baseURL}/api/projects`);
    return { projects };
  }
  render() {
    const { projects = [] } = this.props;
    return (
      <Layout>
        <h2>Projects</h2>
        <p>A non exhaustive list of projects I've completed.</p>
        <Projects projects={projects} type="projects" />
      </Layout>
    );
  }
}
