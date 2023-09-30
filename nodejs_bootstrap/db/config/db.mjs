import { Sequelize } from "sequelize";
const {AZURE_MYSQL_HOST, AZURE_MYSQL_PORT , AZURE_MYSQL_USER , AZURE_MYSQL_PASSWORD } = process.env;
const db = new Sequelize("hoteles", AZURE_MYSQL_USER , AZURE_MYSQL_PASSWORD, {
  dialect: "mysql",
  dialectOptions: {
    host: AZURE_MYSQL_HOST,
    port: AZURE_MYSQL_PORT,
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
