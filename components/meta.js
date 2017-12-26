import React from 'react'
import Head from 'next/head';
import stylesheet from '../styles/style.scss';
import slug from 'speakingurl';
import ReactGA from 'react-ga';
import AdSense from 'react-adsense';
import axios from 'axios';

export default class Meta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      baseURL: this.props.baseURL,
      pathName: '',
      search: ''
    }
  }
  componentDidMount() {
    // get window information
    this.setState({ pathName: window.location.pathname })
    this.setState({ search: window.location.search })
  }
  render() {

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>tdevisscher.com</title>
          <meta property="og:title" content={`Thomas Devisscher`} />
          <meta
            property="og:description"
            content="Thomas Devisscher lives and works in Ottawa, Canada building JavaScript and Python things. You should follow him."
          />
          <meta property="og:url" content="https://tdevisscher.com" />
          <meta
            property="og:image"
            content={`https://s3.amazonaws.com/tdevisscher-images/collaborative-projects/td.png`}
          />
          <link
            rel="shortcut icon"
            href={`https://s3.amazonaws.com/tdevisscher-images/collaborative-projects/td.png`}
          />
          <title>Thomas Devisscher</title>
          <style
            dangerouslySetInnerHTML={{ __html: stylesheet.replace(/\n/g, '') }}
          />
          <script>
            {ReactGA.initialize('UA-110816894-1', { debug: true })}
            {ReactGA.pageview(this.state.pathName, this.state.search)}
          </script>
          <AdSense.Google client='ca-pub-8615534749322314'
            slot=''
            style={{ width: 500, height: 300, background: 'red' }}
            format='' />
        </Head>
      </div>)
  }
}
