FROM node:14.15.4

RUN apt update
RUN npm install -g npm

RUN mkdir -p /usr/src/donkeykong
WORKDIR /usr/src/donkeykong

COPY package.json /usr/src/donkeykong
RUN npm install

COPY . /usr/src/donkeykong
CMD ["npm", "run", "start"]

