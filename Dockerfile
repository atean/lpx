FROM ubuntu:18.04
COPY . /app
RUN cd /app && npm install
CMD npm start