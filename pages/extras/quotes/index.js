import React from 'react';
import axios from 'axios';
import Layout from '../../../components/Layout';
import glamorous from 'glamorous';

const Blockquote = glamorous.blockquote({
  fontSize: '1em',
  '& :hover': {
    cursor: 'pointer',
    backgroundColor: '#f7f7f7',
  },
  '&.hide': {
    display: 'none',
  },
});


export default class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: '',
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/devisscher/Quotes/master/quotes.json')
      .then((response) => {
        this.setState({ authorFilter: 'all' });
        this.setState({ results: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleFilter(event) {
    this.setState({ authorFilter: event.target.innerHTML || 'all' });
  }
  handleSearch(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    return (
      <Layout>
        <p>Quotation: A group of words taken from a text or speech and repeated by someone other than the original author or speaker.</p>
        <div>
          <fieldset>
            <input type="text" placeholder="search" onChange={this.handleSearch} />
          </fieldset>
        </div>
        <div>
          {this.state.results.map((result) => {
            let showAuthorClass;
            switch (this.state.authorFilter) {
              case (result.author):
                showAuthorClass = 'show';
                break;
              case ('all'):
                showAuthorClass = 'show';
                break;
              default:
                showAuthorClass = 'hide';
            }
            console.log((result.author).includes(this.state.search));
            if ((result.author).includes(this.state.search)) {
              showAuthorClass = 'show';
            } else {
              showAuthorClass = 'hide';
            }

            return (
              <Blockquote key={result.id} className={`${showAuthorClass}`}>
                <p>
                  {result.quote}
                  <br />
                  <button className="quote-button-link" href="#" onClick={this.handleFilter}>
                    {result.author}
                  </button>
                </p>
              </Blockquote>);
          })}
        </div>
      </Layout>
    );
  }
}
