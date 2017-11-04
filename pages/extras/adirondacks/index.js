import React from 'react';
import axios from 'axios';
import Layout from '../../../components/Layout';
//import sandwiches from './sandwhiches.png';
//import AdkSlider from './adk_slider.js';
export default class Adirondacks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  getList = () => {
    axios
      .get(
        'https://raw.githubusercontent.com/devisscher/Adirondacks46/master/data/adirondacks_46.json'
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
        <div>
          <h2>Adirondacks 46 Peaks</h2>
          <p>
            <strong>Objective:</strong> To complete the ascension of every peak
            in the Adirondacks. "The mountains are calling and I must go." 😎
          </p>

          <h2>Peaks ranked by height.</h2>
          <p>Percentile based on altitude from 5344 ft. to 3829 ft. </p>
          <ul style={{ listStyleType: 'none' }}>
            {this.state.results.map((result, index) => {
              let percentClass = `percent percentage-${(result.percentile * 100
              ).toFixed(0)}`;
              let complete = result.status;
              let id = `mountain${index}`;
              return (
                <li key={result.id} className={percentClass}>
                  <label htmlFor={id} style={{ margin: 0, paddingTop: 10 }}>
                    <input
                      id={id}
                      type="checkbox"
                      checked={complete}
                      readOnly
                    />
                    {index + 1}. {result.name} - {result.elevation} ft.{' '}
                  </label>
                </li>
              );
            })}
          </ul>
          <h3>Sandwhiches from the Big Mountain Deli are great!</h3>
          <p>
            If you are looking for a quick and delicious lunch be sure to stop
            at the Big Mountain Deli. They serve 46 delicious sandwiches!{' '}
          </p>
          <img
            src="https://s3.amazonaws.com/tdevisscher-images/sandwhiches.png"
            alt="46 sandwhiches"
          />
        </div>
      </Layout>
    );
  }
}
