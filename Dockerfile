FROM node:12.2.0
RUN mkdir -p /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app
RUN npm install
RUN npm install -g @angular/cli@10.2.0
COPY . /app
CMD ng serve --host 0.0.0.0
