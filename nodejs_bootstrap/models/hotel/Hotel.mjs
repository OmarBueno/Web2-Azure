import db from "../../db/config/db.mjs";
import { DataTypes } from "sequelize";
import Habitacion from "./Habitacion.mjs";

export const Hotel = db.define(
  "hoteles",
  {
    id_htl: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
Hotel.hasMany(Habitacion, {
  foreignKey: "id_htl",
  sourceKey: "id_htl",
});

Habitacion.belongsTo(Hotel, {
  foreignKey: "id_htl",
  targetKey: "id_htl",
});

export default Hotel;