import React from 'react';
import axios from 'axios';

import Projects from '../../../components/Projects';

import Layout from '../../../components/Layout';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }
  componentDidMount() {
    this.getRecipes();
  }
  getRecipes() {
    axios.get('/api/recipes').then((response) => {
      this.setState({ recipes: response.data });
    });
  }
  render() {
    return (
      <Layout>
        <h2>Recipes</h2>
        <p>A non exhaustive list of recipes I enjoy making.</p>
        <Projects projects={this.state.recipes} type="recipes" />
      </Layout>
    );
  }
}
