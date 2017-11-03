const { promisify } = require('util');
const glob = promisify(require('glob'));
const marked = require('meta-marked');
const { readFile } = require('fs');
const readAFile = promisify(readFile);
const format = require('date-fns/format');
const pad = num => ('000' + num).substr(-3);

let shows = [];

var renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return '<a target="_blank" href="' + href + '"> ' + text + '</a>';
};

const loadPosts = async () => {
  const files = await glob('posts/*.md');
  const markdownPromises = files.map(file => readAFile(file, 'utf-8'));
  const postMarkdown = await Promise.all(markdownPromises);

  posts = postMarkdown
    .map(md => marked(md, { renderer: renderer })) // convert to markdown
    .map((post, i) =>
      Object.assign({}, post.meta, {
        html: post.html,
        notesFile: files[i],
        displayDate: format(parseFloat(post.meta.date), 'MMM Do, YYYY'),
        number: parseFloat(post.meta.number.toString(8)),
        tags: post.meta.tags
      })
    ) // flatten
    .map(post => Object.assign({}, post, { displayNumber: pad(post.number) })) // pad zeros
    .reverse();
};

const loadTags = async () => {
  const files = await glob('posts/*.md');
  const markdownPromises = files.map(file => readAFile(file, 'utf-8'));
  const postMarkdown = await Promise.all(markdownPromises);

  tagArrays = postMarkdown
    .map(md => marked(md, { renderer: renderer })) // convert to markdown
    .map(post => post.meta.tags);
  tagsArray = [].concat.apply([], tagArrays);
  tags = tagsArray.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
};

exports.getTags = () => {
  const now = Date.now();
  return tags;
};

exports.getPostsTaggedWith = tag => {
  const arrOfPosts = [];
  posts.filter(post => {
    let tags = post.tags.map(tag => tag.toLowerCase());
    console.log(tags);
    if (tags.includes(tag)) {
      arrOfPosts.push(post);
    }
  });
  return arrOfPosts;
};

exports.getPosts = () => {
  const now = Date.now();
  return posts.filter(post => post.date < now);
};

exports.getPost = number => {
  const post = posts.find(post => post.displayNumber === number);
  return post;
};

loadPosts();
loadTags();
``;
