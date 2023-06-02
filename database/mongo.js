const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));


async function main() {
  if(process.env.NODE_ENV === "local") {
    await mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`);
  } else {
    console.log(`USER: ${process.env.DB_PRODUCTION_USERNAME}`);
    await mongoose.connect(`mongodb+srv://${process.env.DB_PRODUCTION_USERNAME}:${process.env.DB_PRODUCTION_PASSWORD}@cluster0.iuddyty.mongodb.net/?retryWrites=true&w=majority
    `);
  }
}

module.exports = mongoose;