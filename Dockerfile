FROM node:12.2.0 as build
RUN mkdir -p /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli@10.2.0
COPY . /app
RUN npm run build -- --prod
FROM nginx:latest
COPY --from=build /app/dist/ /usr/share/nginx/html


