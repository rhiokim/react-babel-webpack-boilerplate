// var context = require.context('.', true, /.+\.spec\.jsx?$/);
var context = require.context('./app', true, /-test\.jsx?$/);
context.keys().forEach(context);

