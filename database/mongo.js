const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
  if(process.env.API_MODE === "local") {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
  }
  await mongoose.connect(`${process.env.DB_PRODUCTION_URL}`);
}

module.exports = mongoose;