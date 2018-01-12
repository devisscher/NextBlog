const express = require('express');
const Next = require('next');
const Router = require('./routes').Router;
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = Next({ dev });
const handle = app.getRequestHandler();
const {
  getPosts,
  getPost,
  getTags,
  getPostsTaggedWith,
  getProjects,
  getProject,
  getRecipes,
  getRecipe,
} = require('./lib/getPosts');


app.prepare().then(() => {
  const server = express();
  server.use(compression());
  // API endpoints
  // Get Posts
  server.get('/api/posts', (req, res) => {
    res.json(getPosts());
  });
  // Get post
  server.get('/api/posts/:number', (req, res) => {
    const post = getPost(req.params.number);
    if (post) {
      res.json(post);
      return;
    }
    res.status(404).json({ message: 'Sorry not found' });
  });
  // Get tags
  server.get('/api/tags', (req, res) => {
    res.json(getTags());
  });
  // Get tag
  server.get('/api/tag/:tag', (req, res) => {
    const tag = getPostsTaggedWith(req.params.tag);
    if (tag) {
      res.json(tag);
      return;
    }
    res.status(404).json({ message: 'Sorry not found' });
  });
  // Get projects
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
  // Get recipes
  server.get('/api/recipes', (req, res) => {
    res.json(getRecipes());
  });
  server.get('/api/recipe/:recipe', (req, res) => {
    const recipe = getRecipe(req.params.recipe);
    if (recipe) {
      res.json(recipe);
      return;
    }
    res.status(404).json({ message: 'Sorry not found' });
  });
  server.all('*', (req, res, next) => {
    next();
  });
  Router.forEachPattern((page, pattern, defaultParams) => {
    server.get(pattern, (req, res) => {
      app.render(
        req,
        res,
        `/${page}`,
        Object.assign({}, defaultParams, req.query, req.params),
      );
    });
  });
  server.get('*', (req, res) => handle(req, res));
  server.listen(port);
  console.log('Server listening on port: ', port);
});
