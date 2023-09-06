process.package = require('./package.json');

var tapir = require('cms-tapir');
if(!global.process){
  global.process = {env: {NODE_ENV: 'development'}};
}

var api = {};
api.Version = tapir.Group('CRUD', require('./api/version.js'));

global.T = new tapir({
  config: require('./config/config.js'),
  routes: require('./config/routes.js'),
  base: __dirname,
  api
});