require('reflect-metadata');
const context = require.context('./app', true, /\.(js|ts|tsx)$/);
console.log(context);
context.keys().forEach(context);
