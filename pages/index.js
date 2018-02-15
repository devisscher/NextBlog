import React from 'react';
import axios from 'axios';
import glamorous from 'glamorous';
import Posts from '../components/Posts';
import Layout from '../components/Layout';

const Grid = glamorous.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '10px',
  gridAutoRows: 'minmax(100px, auto)',
});
const Banner = glamorous.div({
  display: 'none',
  gridColumn: '1 / 4',
  gridRow: 1,
  zIndex: '-1',
  backgroundImage: 'url("keyboard.JPG")',
  backgroundColor: '#cccccc',
  width: '100%',
  height: '250px',
});
const Content = glamorous.div({
  gridColumn: '1 / 4',
  gridRow: 2,
});

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts() {
    axios
      .get('/api/posts')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(err => {
        this.setState({ posts: [{ title: `No posts found. ${err}` }] });
      });
  }
  render() {
    return (
      <Layout>
        <Grid>
          <Banner />
          <Content>
            <h2 className="page-header">Home</h2>
            <Posts posts={this.state.posts} />
          </Content>
        </Grid>
      </Layout>
    );
  }
}
