const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
  if(process.env.NODE_ENV === "local") {
    await mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`);
  } else {
    console.log("Entrou no modo dev");
    await mongoose.connect(process.env.DB_PRODUCTION_URL);
  }
}

module.exports = mongoose;