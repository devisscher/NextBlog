import React from 'react';
import axios from 'axios';

import Projects from '../../components/Projects';

import Layout from '../../components/Layout';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    this.getProjects();
  }
  getProjects() {
    axios.get('/api/projects').then((response) => {
      this.setState({ projects: response.data });
    }).catch((err) => {
      this.setState({ projects: [{ title: `No projects found. ${err}.` }] });
    });
  }
  render() {
    return (
      <Layout>
        <h2>Projects</h2>
        <p>A non exhaustive list of projects completed.</p>
        <Projects projects={this.state.projects} type="projects" />
      </Layout>
    );
  }
}
