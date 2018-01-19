---
date: 1515298943401
title: "Circle CI and Node.js"
file: "010-circle-ci-and-nodejs.md"
number: 010
draft: true
tags: 
    - JavaScript
---
In the past I used Travis CI to automate deployments, but recently I decided to try out Circle CI. Here is how I set up a deployment to Now.sh with Circle CI.

```
version: 2
jobs:
  build-job:
    docker:
      - image: circleci/node:8.0
    working_directory: ~/repo
    steps:
      - checkout
      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          - v1-dependencies-
      - run: npm install
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      - run: npm test
  deploy-job:
    docker:
      - image: circleci/node:8.0
    working_directory: ~/repo 
    steps:
      - checkout
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          - v1-dependencies-
      - run: npm install
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      - run: npm test
      - run:
          name: Deploy 
          command: npm run deploy
      - run:
          name: Alias 
          command: npm run alias
      - run:
          name: Scale 
          command: npm run scale

workflows:
  version: 2
  build-deploy:
    jobs:
      - build-job
      - deploy-job:
          requires:
            - build-job
          filters:
            branches:
              only: master

```
