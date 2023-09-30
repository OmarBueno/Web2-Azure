import { DataTypes } from "sequelize";
import db from "../../db/config/db.mjs";

const Habitacion = db.define(
    "habitaciones",
    {
        id_hbt: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        piso: {
            type: DataTypes.STRING,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        refrigerador: {
            type: DataTypes.BOOLEAN,
        },
    },
    { timestamps: false }
);

export default Habitacion;
