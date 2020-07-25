require('dotenv').config()

const app = require('./app');
require('./database');

async function main() {
    await app.listen('5000');
    console.log('server on port 4000');
}

main();