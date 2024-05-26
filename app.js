const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// sequelize.sync() //sync method look all the method we define  in product.js so it's aware of ur all the model and than basically creates a table for us that sync does, it syncs ur model to the database by creating the appropiate tables and if u have them relations  and .then listen to the result and catch the error

sequelize
  .sync()
  .then((result) => {
    // console.log("Result in sync", result);
    console.log(result);
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    }); //i only start if i somehow made it to then
  })
  .catch((err) => console.log("======>", err));
