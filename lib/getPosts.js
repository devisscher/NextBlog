const { promisify } = require('util');
const glob = promisify(require('glob'));
const marked = require('meta-marked');
const { readFile } = require('fs');

const readAFile = promisify(readFile);
const format = require('date-fns/format');

const pad = num => (`000${num}`).substr(-3);
const slug = require('speakingurl');

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => `<a target="_blank" href="${href}"> ${text}</a>`;

let posts = [];
let tags = [];
let projects = [];
let recipes = [];

const loadPosts = async () => {
  const files = await glob('posts/*.md');
  const markdownPromises = files.map(file => readAFile(file, 'utf-8'));
  const postMarkdown = await Promise.all(markdownPromises);
  posts = postMarkdown
    .map(md => marked(md, { renderer })) // convert to markdown
    .map((post, i) =>

      Object.assign({}, post.meta, {
        file: post.meta.file,
        html: post.html,
        notesFile: files[i],
        displayDate: format(parseFloat(post.meta.date), 'MMM Do, YYYY'),
        number: parseFloat(post.meta.number.toString(8)),
        tags: post.meta.tags,
      })) // flatten
    .map(post => Object.assign({}, post, { displayNumber: pad(post.number) })) // pad zeros
    .reverse();
};

const loadProjects = async () => {
  const files = await glob('pages/projects/projects/*.md');
  const markdownPromises = files.map(file => readAFile(file, 'utf-8'));
  const postMarkdown = await Promise.all(markdownPromises);
  projects = postMarkdown
    .map(md => marked(md, { renderer })) // convert to markdown
    .map((project, i) =>
      Object.assign({}, project.meta, {
        title: project.meta.title,
        html: project.html,
        notesFile: files[i],
        displayDate: project.meta.date,
        tags: project.meta.tags,
      }))
    .reverse();
};

const loadRecipes = async () => {
  const files = await glob('pages/extras/recipes/*.md');
  const markdownPromises = files.map(file => readAFile(file, 'utf-8'));
  const postMarkdown = await Promise.all(markdownPromises);
  recipes = postMarkdown
    .map(md => marked(md, { renderer })) // convert to markdown
    .map((recipe, i) =>
      Object.assign({}, recipe.meta, {
        title: recipe.meta.title,
        html: recipe.html,
        notesFile: files[i],
        displayDate: recipe.meta.date,
        tags: recipe.meta.tags,
      }))
    .reverse();
};

const loadTags = async () => {
  const files = await glob('posts/*.md');
  const markdownPromises = files.map(file => readAFile(file, 'utf-8'));
  const postMarkdown = await Promise.all(markdownPromises);
  const tagArrays = await postMarkdown
    .map(md => marked(md, { renderer }))
    .map(post => post.meta.tags);

  const tagsObject = await [].concat(...tagArrays);

  tags = tagsObject.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
};

exports.getTags = () => tags;
exports.getPostsTaggedWith = (tag) => {
  const arrOfPosts = [];
  posts.filter((post) => {
    tags = post.tags.map(tga => tga.toLowerCase());
    if (tags.includes(tag) && post.draft === false) {
      arrOfPosts.push(post);
    }
  });
  return arrOfPosts;
};

exports.getPosts = () => {
  const now = Date.now();
  return posts.filter(post => post.date < now && post.draft == false);
};

exports.getPost = (number) => {
  const post = posts.find(post => post.displayNumber === number);
  return post;
};

exports.getProjects = () => {
  const now = Date.now();
  return projects.filter(project => project.date < now);
};

exports.getProject = (title) => {
  const project = projects.find(project => slug(project.title) === title);
  return project;
};

exports.getRecipes = () => {
  const now = Date.now();
  return recipes.filter(recipe => recipe.date < now && recipe.draft == false);
};

exports.getRecipe = (title) => {
  const recipe = recipes.find(recipeItem => slug(recipeItem.title) === title);
  return recipe;
};

loadPosts();
loadTags();
loadProjects();
loadRecipes();
'';
