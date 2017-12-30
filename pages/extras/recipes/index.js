import React from 'react';
import axios from 'axios';

import Projects from '../../../components/Projects';

import Layout from '../../../components/Layout';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

export default class Index extends React.Component {
  static async getInitialProps() {
    const { data: recipes } = await axios.get(`${BASE_URL}/api/recipes`);
    return { recipes };
  }
  render() {
    const { recipes = [] } = this.props;
    return (
      <Layout>
        <h2>Recipes</h2>
        <p>A non exhaustive list of recipes I enjoy making.</p>
        <Projects projects={recipes} type="recipes" />
      </Layout>
    );
  }
}
