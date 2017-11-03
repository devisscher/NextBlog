import axios from 'axios';
import config from '../../static/config';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default class Extras extends React.Component {
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
        <p>Extras</p>
        <p>Little projects that aren't really blog posts</p>
        <ul>
          <li>
            <Link href="/extras/quotes">
              <a>These quotes are cool to me.</a>
            </Link>
          </li>
          <li>
            <Link href="/extras/adirondacks">
              <a>The adirondacks are magical, which ones have you done?</a>
            </Link>
          </li>
          <li>
            <Link href="https://devisscher.github.io/sudoku-solver">
              <a>Sudoku Solver.</a>
            </Link>
          </li>
        </ul>
      </Layout>
    );
  }
}
