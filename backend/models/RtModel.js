import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Rt = db.define(
  "rt",
  {
    rt: DataTypes.STRING,
    ketua: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    alamat: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Rt;
(async () => {
  await db.sync();
})();
