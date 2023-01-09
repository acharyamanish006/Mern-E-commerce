const { app, json_converter } = require("./config/express");
require("dotenv").config();
const connect_DB = require("./config/connectDB");
const router = require("./router/router");
const cookieParser = require("cookie-parser");

//connecting to database
connect_DB();

//middleware
app.use(json_converter);
app.use(cookieParser());
app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log(`port at ${process.env.PORT}`);
});
