const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'index',
    prettyUrl: '/'
  },
  {
    page: 'post',
    prettyUrl: ({ number = '', slug = '' }) => `/blog/post/${number}/${slug}`,
    prettyUrlPatterns: [{ pattern: '/blog/post/:number/:slug' }]
  },
  {
    page: 'tags/tag',
    prettyUrl: ({ tag = '' }) => `/tags/${tag}`,
    prettyUrlPatterns: [{ pattern: '/tags/:tag' }]
  },
  {
    page: 'projects/project',
    prettyUrl: ({ project = '' }) => `/projects/${project}`,
    prettyUrlPatterns: [{ pattern: '/projects/:project' }]
  }
  ,
  {
    page: 'extras/recipes/recipe',
    prettyUrl: ({ recipe = '' }) => `/extras/recipes/${recipe}`,
    prettyUrlPatterns: [{ pattern: '/extras/recipes/:recipe' }]
  }
];

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;
