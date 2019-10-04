const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useCreateIndex: true
// });

mongoose.connect("mongodb://localhost/quoteposts", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", function() {
  // throw new ERROR('party')
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
