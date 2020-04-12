const app = require('./src/server');
require('dotenv/config');

app.listen(process.env.APP_PORT);