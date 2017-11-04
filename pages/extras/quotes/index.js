import React from 'react';
import axios from 'axios';
import Layout from '../../../components/Layout';

export default class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  componentDidMount() {
    axios
      .get('https://api.tdevisscher.ca/quotes')
      .then(response => {
        console.log(response);
        this.setState({ results: response.data.quotes });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Layout>
        <div>
          {this.state.results.map(result => {
            return (
              <blockquote key={result._id}>
                <p>
                  {result.quote}
                  <br />
                  <a href="#">
                    <em>{result.author}</em>
                  </a>
                </p>
              </blockquote>
            );
          })}
        </div>
      </Layout>
    );
  }
}
