import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Link from 'next/link';

const Extras = () => (
  <Layout>
    <h2 className="page-header">Extras</h2>
    <p>Little projects that aren't really blog posts</p>
    <ul>
      <li>
        <Link href="/extras/quotes">
          <a>These quotes are cool to me</a>
        </Link>
      </li>
      <li>
        <Link href="/extras/adirondacks">
          <a>The adirondacks are magical, which ones have you done?</a>
        </Link>
      </li>
      <li>
        <Link href="https://devisscher.github.io/sudoku-solver">
          <a>Sudoku Solver</a>
        </Link>
      </li>
      <li>
        <Link href="/extras/booket-list">
          <a>Booket List</a>
        </Link>
      </li>
      <li>
        <Link href="/extras/recipes">
          <a>Recipe Book</a>
        </Link>
      </li>
    </ul>
  </Layout>
);
export default Extras;
