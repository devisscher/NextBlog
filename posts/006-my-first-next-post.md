---
date: 1509647267333
title: "My first Next post"
number: 006
tags: 
    - Blog
    - JavaScript
---

Well, Gatsby was nice, but I didn't feel great about it. No offense to anyone who is working on Gatsby, it is a great system. I made the switch because I came across this framework called [Next.js](https://github.com/zeit/next.js/). I was immediately seduced by the way it proposes to do things. Additionally it provides a complete deployment workflow which takes away the hassle of configuring all that. Thank you to the folks at [Zeit](https://zeit.co/), your work is phenomenal. As I don't wish to spend all my time working on my blog, I felt the switch would make my life easier. Hopefully this decision will last a little while.

## Some cool things to mention about Next

- By using a custom server configuration, you can serve static assets such as markdown posts. Shoutout to [Syntax.fm](https://syntax.fm), this website is inspired by the techniques Wes and Scott used to parse and render markdown.
- Each component and or folder containing a component within the pages directory will render a React component.
- Deploying is as simple as typing ``` now ```.
- I'm using Milligram CSS framework which relies heavily on Flexbox for layouts. This makes the grid system really slick and intuitive.

## Deployment

Deployment with Now.sh is a breeze but you might want to automate. Here is how I achieved it for this website using Git and Travis. Every time I push or merge to the master branch a new deployment is initiated in Travis.

1. You need to get credentials from Zeit: https://zeit.co/account/tokens take note of this we will need it later. 
2. Create a ```.travis.yml``` file.
3. Generate secure variables for your Zeit token by running the following command. (You need to install Travis CLI tools): ```travis encrypt -r <username>/<repo> NOW_TOKEN=xxxxxxxxxxxxxxxxxxxxxxx --add```


Again this is a WIP as are all my blogs and websites. Changing platforms is a recurring theme so here is a list of posts which talk about my older sites.

- [Jekyll Website](/blog/post/001/welcome-old-jekyll-site)
- [Gatsby Website](/blog/post/001/welcome-old-jekyll-site)