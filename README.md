# Ngx loopback
[![Build Status](https://travis-ci.org/romainbellande/ngx-loopback.svg?branch=master)](https://travis-ci.org/romainbellande/ngx-loopback)
[![Coverage Status](https://coveralls.io/repos/github/romainbellande/ngx-loopback/badge.svg?branch=master)](https://coveralls.io/github/romainbellande/ngx-loopback?branch=master)

This project is a starter kit with loopback and angular 4.
## Technologies used
- [Angular](https://angular.io/)
- [Loopback](https://loopback.io/)
- [MongoDb](https://www.mongodb.com/download-center#community) (optionnal)
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
- [ng-bootstrap](https://ng-bootstrap.github.io)
## Requirements
- Mongodb installed (but you can use another datasource with loopback)
- [yarn](https://yarnpkg.com), a tool to perform a better dependency management than npm.
## Setup
- execute `./install.sh` in your shell to install loopback, angular dependencies and some other features
- execute `mongod` in your your shell to start mongodb database
- start loopback with `npm start`
- start angular with `npm run angular`
- enjoy !
## Usage
### UserService
- User creation
```
this.userService.create({
  username: 'admin',
  password: 'admin',
  email: 'admin@example.com'
}).subscribe();
```
- User login
```
this.userService.login({
  username: 'admin',
  password: 'admin'
}).subscribe();
```
- User Logout
```
this.userService.logout().subscribe();
```
