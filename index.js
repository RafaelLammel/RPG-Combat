const app = require('./src/server');
require('dotenv/config');

app.listen(process.env.PORT || 3000);