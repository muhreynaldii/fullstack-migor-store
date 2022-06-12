import { Sequelize } from "sequelize";

const db = new Sequelize("migor_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
