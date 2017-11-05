import React from 'react';
import axios from 'axios';
import Projects from '../../components/Projects';
import format from 'date-fns/format';
import glamorous from 'glamorous';
import Link from 'next/link';
import Layout from '../../components/Layout';

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
    background: '#9b4dca'
  }
});

export default class ProjectPage extends React.Component {
  constructor(props) {
    super();
  }
  static async getInitialProps({ req }) {
    //const { query, params } = query;
    //return params.id;
    console.log('>> params are: ', req.params, req.query, '\naaa\n');
    // console.log('referer', urlSplit);
    // console.log('projectId', projectId);
    const protocol =
      req && req.headers.host.indexOf('localhost') > -1
        ? 'http'
        : req ? req.protocol : '';
    // const urlSplit = window.location.href.split('/');
    // const projectId = urlSplit[urlSplit.length - 2];
    const baseURL = req
      ? `${protocol}://${req.headers.host}`
      : window.location.origin;
    const { data: project } = await axios.get(
      `${baseURL}/api/project/${req.params.project}`
    );

    return { project, baseURL };
  }
  render() {
    const { project = {}, baseURL } = this.props;
    function TagsList(props) {
      console.log(props);
      const tags = props.tags || [];
      const tagItems = tags.map(tag => (
        <Tag href={`/projects/${tag.toLowerCase()}`}>{tag}</Tag>
      ));
      return <div>{tagItems}</div>;
    }
    return (
      <Layout>
        <h1>{project.title}</h1>
        <TagsList tags={project.tags} />
        <small style={{ paddingTop: 0 }}>
          {format(parseFloat(project.date), 'MMM Do, YYYY')}
        </small>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
        <Link href="/projects">
          <a>Back to projects</a>
        </Link>
      </Layout>
    );
  }
}
