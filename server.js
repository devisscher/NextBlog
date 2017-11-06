const express = require('express');
const next = require('next');
const Router = require('./routes').Router;
const path = require('path');
const cron = require('node-cron');
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const {
  getPosts,
  getPost,
  getTags,
  getPostsTaggedWith,
  getProjects,
  getProject
} = require('./lib/getPosts');
const { likeTweets } = require('./lib/likeTweets');

app.prepare().then(() => {
  const server = express();

  // API endpoints
  server.get('/api/posts', (req, res) => {
    res.json(getPosts());
  });
  server.get('/api/posts/:number', (req, res) => {
    const post = getPost(req.params.number);
    if (post) {
      res.json(post);
      return;
    }
    res.status(404).json({ message: 'Sorry not found' });
  });
  server.get('/api/tags', (req, res) => {
    res.json(getTags());
  });
  server.get('/api/tag/:tag', (req, res) => {
    const tag = getPostsTaggedWith(req.params.tag);
    if (tag) {
      res.json(tag);
      return;
    }
    res.status(404).json({ message: 'Sorry not found' });
  });

  server.get('/api/projects', (req, res) => {
    res.json(getProjects());
  });
  server.get('/api/project/:project', (req, res) => {
    const project = getProject(req.params.project);
    if (project) {
      res.json(project);
      return;
    }
    res.status(404).json({ message: 'Sorry not found' });
  });
  // Define other pages here
  server.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
  });

  cron.schedule('0 * * * *', function() {
    console.log('running a task every minute');
    likeTweets();
  });
  // Custom Next.js URLs
  Router.forEachPattern((page, pattern, defaultParams) => {
    server.get(pattern, (req, res) => {
      app.render(
        req,
        res,
        `/${page}`,
        Object.assign({}, defaultParams, req.query, req.params)
      );
    });
  });
  // everything else
  server.get('*', (req, res) => handle(req, res));
  server.listen(port);
});
