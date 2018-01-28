import React from 'react';
import Head from 'next/head';
import stylesheet from '../styles/style.scss';
import slug from 'speakingurl';
import ReactGA from 'react-ga';
import axios from 'axios';

const BASE_URL = process !== 'undefined' ? process.env.BASE_URL : null;

export default class Meta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pathName: '',
      search: '',
    };
  }
  componentDidMount() {
    this.getWindowInformation();
  }
  getWindowInformation() {
    const pathName = window.location.pathname;
    const search = window.location.search;
    this.setState({ pathName });
    this.setState({ search });
  }
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta property="og:title" content="Thomas Devisscher" />
          <meta property="og:description" content="Thomas Devisscher lives and works in Ottawa, Canada building JavaScript and Python things. You should follow him." />
          <meta property="og:url" content={BASE_URL} />
          <meta property="og:image" content="https://s3.amazonaws.com/tdevisscher-images/collaborative-projects/td.png" />
          <meta name="google-site-verification" content="tjFGZHcjCQbOVW9r2dlvpvf5MwoNolqswH2HtydZ6kY" />
          <link rel="shortcut icon" href="https://s3.amazonaws.com/tdevisscher-images/collaborative-projects/td.png" />
          <title>Thomas Devisscher</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet.replace(/\n/g, '') }} />
          <script>
            {/* Tracking code for: devisscher.ca */}
            {ReactGA.initialize('UA-48758641-1', { debug: true })}
            {ReactGA.pageview(this.state.pathName, this.state.search)}
          </script>
        </Head>
      </div>
    );
  }
}
