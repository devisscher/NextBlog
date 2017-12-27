import React from 'react';
import axios from 'axios';
import { baseURL } from '../../../lib/url';
import Projects from '../../../components/Projects';

import Layout from '../../../components/Layout';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps() {
    const { data: recipes } = await axios.get(`${baseURL}/api/recipes`);
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
