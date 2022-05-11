const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API Docs',
        description: 'Documentation describing how to utilize the Contacts API.'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js', './routes/contacts.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
