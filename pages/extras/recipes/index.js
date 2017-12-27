import React from 'react'
import axios from 'axios'
import Projects from '../../../components/Projects'

import Layout from '../../../components/Layout'

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
    const { data: recipes } = await axios.get(`${baseURL}/api/recipes`);
    return { recipes, baseURL };
  }
  render() {
    const { recipes = [], baseURL } = this.props;
    return (
      <Layout>
        <h2>Recipes</h2>
        <p>A non exhaustive list of recipes I enjoy making.</p>
        <Projects projects={recipes} type="recipes" />
      </Layout>
    );
  }
}
