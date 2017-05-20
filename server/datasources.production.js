module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  mongodb: {
    connector: 'mongodb',
    hostname: process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost',
    port: process.env.MONGO_PORT_27017_TCP_PORT || 27017,
    user: '',
    password: '',
    database: 'ngx-loopback',
  }
};
