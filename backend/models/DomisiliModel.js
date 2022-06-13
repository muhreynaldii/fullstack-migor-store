import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Domisili = db.define(
  "domisili",
  {
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Domisili;

(async () => {
  await db.sync();
})();
