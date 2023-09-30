// import express from "express";
// const hotel_router = express.Router();
// import {
//     getGerentes,
//     createGerente,
// } from "../controllers/hotel/gerenteController.mjs";
// import {
//     getHabitaciones,
//     createHabitacion,
// } from "../controllers/hotel/habitacionController.mjs";
// import {
//     getHoteles,
//     createHotel,
// } from "../controllers/hotel/hotelController.mjs";

// //routing
// hotel_router.get("/gerentes", getGerentes);
// hotel_router.post("/gerentes", createGerente);

// hotel_router.get("/habitaciones", getHabitaciones);
// hotel_router.post("/habitaciones", createHabitacion);

// hotel_router.get("/hoteles", getHoteles);
// hotel_router.post("/hoteles", createHotel);

import express from "express";
import {
  altaGerente,
  registrando,
} from "../controllers/hotel/gerente/altagerenteController.mjs";
import {
  modificarGerente,
  accionbuscarHotelGerente,
  accionLlenarFormulario,
  registrandoModificar,
} from "../controllers/hotel/gerente/modificarGerenteController.mjs";
import { consultaGerente } from "../controllers/hotel/gerente/consultarGerenteController.mjs";
import {
  borrarGerente,
  accionBuscarHotel,
  accionBorrarGerente,
} from "../controllers/hotel/gerente/borrarGerenteController.mjs";
const router_Hotel = express.Router();
//Routing;
//rutas oara dar de alta
router_Hotel.get("/gerente/alta", altaGerente);
router_Hotel.post("/gerente/registrandoGerente", registrando);
//rutas para consultar
router_Hotel.get("/gerente/consultaGerentes", consultaGerente);
//rutas para modificar
router_Hotel.get("/gerente/modificar", modificarGerente);
router_Hotel.post("/gerente/buscarHotelGerente", accionbuscarHotelGerente);
router_Hotel.get("/gerente/llenarFormulario", accionLlenarFormulario);
router_Hotel.post("/gerente/accionModificar", registrandoModificar);

//metodos para borrar
router_Hotel.get("/gerente/borrar", borrarGerente);
router_Hotel.post("/gerente/buscarGerenteHotel", accionBuscarHotel);
router_Hotel.get("/gerente/eliminarGerente", accionBorrarGerente);
export default router_Hotel;
