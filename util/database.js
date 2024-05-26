const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "node-complete",
  "root",
  "sqllegasypassword24",
  { dialect: "mysql", host: "localhost" }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("======> Error syncing the database:");
    console.error(`Error message: ${err.message}`);
    console.error(`Error stack: ${err.stack}`);
    console.error(`Error name: ${err.name}`);
    console.error(
      `Original error: ${err.original ? err.original.message : "N/A"}`
    );
  });

module.exports = sequelize;
