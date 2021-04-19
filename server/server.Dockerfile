FROM node

EXPOSE 5000

WORKDIR /usr/src/server

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]