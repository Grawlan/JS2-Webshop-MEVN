const app = require("./app");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

const serverURL = "http://localhost:" + PORT;
const mongoURL =
  "mongodb+srv://Jonas:BytMig123@cluster0.dr9kv.mongodb.net/webshop?retryWrites=true&w=majority";

app.listen(PORT, () => console.log("Webserver: " + serverURL));

mongoose.set("useCreateIndex", true).connect(
  mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected to Database")
);
