import React from 'react'
import Head from 'next/head';
import stylesheet from '../styles/style.scss';
import slug from 'speakingurl';
import axios from 'axios';

export default ({ post, baseURL }) => (
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
      <meta property="og:url" content={`${baseURL}`} />
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

    </Head>
  </div>
);
