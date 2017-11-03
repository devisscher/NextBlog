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
      </Layout>
    );
  }
}
