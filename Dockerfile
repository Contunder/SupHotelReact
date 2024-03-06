FROM node:18.16.0-alpine

WORKDIR /SupHotelReact

ENV PATH /SupHotelReact/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY .. ./

CMD ["npm", "start"]
EXPOSE 3000
