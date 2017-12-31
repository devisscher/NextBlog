FROM node:8

# Environment variables
ENV NODE_ENV=production PORT=3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Run build
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
