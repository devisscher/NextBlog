import React from 'react';
import axios from 'axios';
import Layout from '../../../components/Layout';
export default class BooketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  getList = () => {
    axios
      .get(
        'https://raw.githubusercontent.com/devisscher/Booket-List/master/data/booket_list' +
          '.json'
      )
      .then(response => {
        console.log(response.data);
        this.setState({ results: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount = () => {
    this.getList();
  };
  render() {
    return (
      <Layout>
        <h2>Booket List</h2>
        <p>A list of books I need to read before I die.</p>
        <ul>
          {this.state.results.map(result => {
            return (
              <li key={result.id}>
                {result.title}
                &nbsp;<a href={result.link}>Link</a>
                <br />
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}
