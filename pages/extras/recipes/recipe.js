import React from 'react';
import axios from 'axios';
import Projects from '../../../components/Projects';
import format from 'date-fns/format';
import glamorous from 'glamorous';
import Link from 'next/link';
import Layout from '../../../components/Layout';

const Tag = glamorous.a({
  display: 'inline-block',
  textTransform: 'uppercase',
  fontWeight: 500,
  margin: '3px',
  fontSize: '1rem',
  padding: '0px 5px',
  color: '#fff',
  textDecoration: 'none',
  background: '#606c76',
  ':hover': {
    color: 'white',
    background: '#9b4dca',
  },
});

export default class RecipePage extends React.Component {
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
    const { data: recipe } = await axios.get(`${baseURL}/api/recipe/${req.params.recipe}`);

    return { recipe, baseURL };
  }
  render() {
    const { recipe = {}, baseURL } = this.props;
    function TagsList(props) {
      const tags = props.tags || [];
      const tagItems = tags.map(tag => (
        <Tag href={`/recipe/${tag.toLowerCase()}`}>{tag}</Tag>
      ));
      return <div>{tagItems}</div>;
    }
    return (
      <Layout>
        <h1>{recipe.title}</h1>
        <small style={{ paddingTop: 0 }}>
          {format(parseFloat(recipe.date), 'MMM Do, YYYY')}
        </small>
        <div dangerouslySetInnerHTML={{ __html: recipe.html }} />
        <Link href="/extras/recipes">
          <a>Back to recipes</a>
        </Link>
      </Layout>
    );
  }
}
