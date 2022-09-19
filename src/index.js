const app = require('./app');
const porte = process.env.PORT || 4000;
let port = app.listen(porte);
console.log('Server is running on port ', porte);
console.log('Todo Va bien');

