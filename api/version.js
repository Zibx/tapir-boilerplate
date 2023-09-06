module.exports = {
  'GET:/api/version': {
    options: {},
    fn: function(){
        return process.package.version;
    }
  }
};