import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <h2 className="page-header">About Me</h2>
    <div className="contained">
      <img className="floated" style={{ width: '200px' }} src="https://avatars1.githubusercontent.com/u/9765013?s=460&v=4" />
      <p>Welcome to my website. You will find a collection of notes, articles, thoughts, and projects that I have worked on. The views expressed on this website or any other medium are mine alone.</p>
      <p>I work as a Software Engineer <a href="https://twitter.com/qlik">@Qlik</a>, and before that I worked as a web-developer in research at <a href="http://ohri.ca">The Ottawa Hospital</a>.</p>
      <p>I’m the type of guy who loves the nitty gritty work involved in making good things happen. I love to work with others on fun projects so don’t hesitate to <a href="mailto:me@tdevisscher.ca">contact me</a>!</p>
      <p>When I’m not programming or outdoors cycling, skiing, camping, canoeing or walking my dog you might find me hanging out with friends enjoying a few brews or, sleeping.</p>
    </div>
  </Layout>
);
export default About;
