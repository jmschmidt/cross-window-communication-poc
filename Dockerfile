# Multi-stage build to build with one image and serve with another
# First, build the app in an Alpine-based node image
FROM node:8.11.3
# Use changes to package.json to force Docker not to use the cache when they change
COPY ./package.json ./yarn.lock /tmp/
# Install Dependencies
RUN cd /tmp && yarn install --pure-lockfile
# Create a folder for the source code
RUN mkdir -p /app/node_modules
RUN cp -ar /tmp/node_modules /app
# Work out of here
WORKDIR /app
# Move over dependencies
# Copy over all site files
COPY . .
# NPM won't recognize the node_modules we copied over earlier unless we run this to link the execs
RUN yarn install --pure-lockfile
# Build the site, will output to build/
RUN yarn run build

# Next, copy over the built site into an Nginx container for hosting
FROM nginx:1.15.0-alpine
# Files can be quickly statically hosted by copying them into this specific folder
WORKDIR /usr/share/nginx/html
# Copy over the built site from the above build step
COPY --from=0 /app/build .
