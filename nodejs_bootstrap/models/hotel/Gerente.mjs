import db from "../../db/config/db.mjs";
import { DataTypes } from "sequelize";
import Hotel from "./Hotel.mjs";

const Gerente = db.define(
    "gerentes",
    {
      id_grt: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      ap_paterno: {
        type: DataTypes.STRING,
      },
      ap_materno: {
        type: DataTypes.STRING,
      },
      telefono: {
        type: DataTypes.STRING,
      },
      id_htl: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
  Hotel.hasOne(Gerente, {
    foreignKey: {
      name: "id_htl",
    },
  });
  Gerente.belongsTo(Hotel, {
    foreignKey: {
      name: "id_htl",
    },
  });
  
  export default Gerente;