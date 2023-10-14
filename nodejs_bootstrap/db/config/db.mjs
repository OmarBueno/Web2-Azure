import { Sequelize } from "sequelize";
const db = new Sequelize("hoteles", "usuario" , "Password", {
  dialect: "mariadc",
  dialectOptions: {
    host: "host",
    port: "port",
    timestamps: false,
    underscore: false,
    pool: {
      max: "5",
      min: "0",
      aquire: "3000",
      idle: "1000",
    },
    operatorAlies: false,
  },
});

export default db;
