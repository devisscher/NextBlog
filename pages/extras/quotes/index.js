import React from 'react';
import axios from 'axios';
import Layout from '../../../components/Layout';

export default class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/devisscher/Quotes/master/quotes.json')
      .then((response) => {
        this.setState({ results: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Layout>
        <div>
          {this.state.results.map(result => (
            <blockquote key={result.id}>
              <p>
                {result.quote}
                <br />
                <a href="#">
                  <em>{result.author}</em>
                </a>
              </p>
            </blockquote>
          ))}
        </div>
      </Layout>
    );
  }
}
