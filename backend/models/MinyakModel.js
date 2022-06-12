import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Minyak = db.define(
  "minyak",
  {
    nama: DataTypes.STRING,
    perioda: DataTypes.DATEONLY,
    harga: DataTypes.INTEGER,
    stok: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Minyak;

(async () => {
  await db.sync();
})();
