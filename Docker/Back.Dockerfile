FROM node:alpine
RUN mkdir -p /usr/src/app
COPY ./back-end /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV=production
RUN npm install --silent
CMD [ "npm", "start" ]