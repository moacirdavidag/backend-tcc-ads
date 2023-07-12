const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));


async function main() {
  try {
    if(process.env.NODE_ENV === "local") {
      await mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`);
    } else {
      await mongoose.connect(`mongodb+srv://${process.env.DB_PRODUCTION_USERNAME}:${process.env.DB_PRODUCTION_PASSWORD}@cluster0.iuddyty.mongodb.net/?retryWrites=true&w=majority`, {
        dbName: 'dadosifpb'
      });
    }
  } catch(e) {
    console.log(e.message);
  }
}

module.exports = mongoose;