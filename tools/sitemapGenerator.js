const path = require('path');
const SitemapGenerator = require('sitemap-generator');

const generator = SitemapGenerator('https://devisscher.ca', {
  stripQuerystring: false,
  filepath: path.join(process.cwd(), '../public/sitemap.xml'),
});
generator.on('done', () => {
  // sitemaps created
});
generator.start();
