import React from 'react';
import axios from 'axios';

import Projects from '../../components/Projects';

import Layout from '../../components/Layout';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

export default class Index extends React.Component {
  static async getInitialProps() {
    const { data: projects } = await axios.get(`${BASE_URL}/api/projects`);
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
