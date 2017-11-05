---
date: 1509647267333
title: "My first Next post"
number: 006
tags: 
    - Blog
    - JavaScript
---
Another switch...

Well, [Gatsby](/blog/post/004/my-first-gatsby-post) was nice, but I didn't feel great about it. No offense to anyone who is working on Gatsby, it's great! I'm not familiar with GraphQL and it added some complexity that I wasn't ready to deal with for a personal site.

I came across this framework called [Next.js](https://github.com/zeit/next.js/). I was immediately seduced by the way it proposes to do things. Additionally it provides a complete deployment workflow which takes away the hassle of configuring all that. Thank you to the folks at [Zeit](https://zeit.co/), your work is phenomenal. As I don't wish to spend all my time working on my website, I felt the switch would make my life easier. Hopefully this decision will last a little while.

## Deployment

Deployment with [Now.sh](https://now.sh) is a breeze but you might want to automate it. Here is how I achieved it for this website using Git and Travis. Every time I push or merge to the master branch a new deployment is initiated in Travis.

1. You need to get credentials from Zeit: https://zeit.co/account/tokens take note of this we will need it later. 
2. Create a ```.travis.yml``` file.
3. Generate secure variables for your Zeit token by running the following command. (You need to install [The Travis Client](https://github.com/travis-ci/travis.rb#installation)): ```travis encrypt -r <username>/<repo> NOW_TOKEN=xxxxxxxxxxxxxxxxxxxxxxx --add```
4. Now open your ```.travis.yml``` file and add the following:

```YAML
language: node_js
node_js:
  - "node"
cache: npm
script: npm run deploy
after_script: now alias -t $NOW_TOKEN
env:
  global:
    secure: <this is your encrypted NOW token. It was added when you ran travis encrypt in #3>
```

5. Open your ```package.json``` file and add the following information tailored to your site information. This is used to run the alias command and point your domain to the correct deployment. (You could also put this in a ```now.json``` file): 

```JSON
{
    ...
    "now":{
        "name": "tdevisscher",
        "alias": ["tdevisscher.com"]
        }
    ...
}
```

6. Open your ```package.json``` file and add the following 2 scripts. These are used in your Travis config. The first is to deploy and the second will be used to alias your latest deploy: 

```JSON
{
...
"scripts": {
...
    "deploy": "now -e NODE_ENV=production --token $NOW_TOKEN --npm",
    "alias": "now alias --token=$NOW_TOKEN"
    }
}
```

7. Test it out by committing your code to Github.

If you want more info about deployments and setting up Travis with [Now.sh](https://now.sh) check out this article: https://zeit.co/blog/now-json.

## Some cool things to mention about Next

- By using a custom server configuration, you can serve static assets such as markdown posts. Shout out to [Syntax.fm](https://syntax.fm), this website is inspired by the techniques Wes and Scott used to parse and render markdown.
- Each component and or folder containing a component within the pages directory will render a React component.
- Deploying is as simple as typing ``` now ``` or in my case pushing my code to Github.
- I'm using Milligram CSS framework which relies heavily on Flexbox for layouts. This makes the grid system really slick and intuitive.

Again this is a WIP as are all my blogs and websites. 

Changing platforms is a recurring theme so here is a list of posts which talk about my older sites.

- [Jekyll Website](/blog/post/001/welcome-old-jekyll-site)
- [Gatsby Website](/blog/post/004/my-first-gatsby-post)