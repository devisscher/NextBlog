import axios from 'axios';
import config from '../static/config';
import Layout from '../components/Layout';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: {}
    };
  }
  componentDidMount() {}
  render() {
    console.log(this.state.information);
    return (
      <Layout>
        <h2>About Me</h2>
        <p>Welcome to my website. You will find a collection of notes, articles, thoughts, and projects that I have worked on.</p>
        <p>I’m the type of guy who loves the nitty gritty work involved in making good things happen. I love to work with others on fun projects, don’t hesitate to contact me!</p>
        <p>When I’m not programming or outdoors cycling, skiing, camping, canoing or walking my dog you might find me hanging out with friends enjoying a few brews or, sleeping.</p>
      </Layout>
    );
  }
}
