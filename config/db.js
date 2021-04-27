const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@clusters.hfcos.mongodb.net/" +
      process.env.DB_NAME,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log(`connected to ${process.env.DB_NAME}`);
  })
  .catch((err) => {
    console.log("failed to connect to mongodb", err);
  });
