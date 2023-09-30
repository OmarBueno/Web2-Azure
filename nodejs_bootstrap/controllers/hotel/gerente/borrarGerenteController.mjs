import { check, validationResult } from "express-validator";
import Gerente from "../../../models/hotel/Gerente.mjs";
import { Hotel } from "../../../models/hotel/Hotel.mjs";
const borrarGerente = async (req, res) => {
  let msg;
  if (req.query.exito) msg = "El gerente se borro correctamente";
  else msg = "Borrar Gerente";
  res.render("hotel/gerente/borrarGerente", {
    pagina: msg,
  });
};
const accionBuscarHotel = async (req, res) => {
  await check("nombre")
    .notEmpty()
    .withMessage("Nombre del hotel no debe ser vacio")
    .run(req);
  let salida = validationResult(req);
  if (!salida.isEmpty()) {
    return res.render("hotel/gerente/borrarGerente", {
      pagina: "Borrar Gerentes",
      errores: salida.array(),
    });
  }

  const nombreHotel = req.body.nombre;
  //buscar el hotel con su nombre; recogiendo gerente
  const ht = await Hotel.findAll({
    include: {
      model: Gerente,
    },
    raw: true,
    nest: true,
    where: {
      nombre: nombreHotel,
    },
  });
  if (ht.length === 0) {
    return res.render("hotel/gerente/borrarGerente", {
      pagina: "Borrar Gerentes",
      nombre: nombreHotel,
      errores: [{ msg: "Ese hotel no existe o no tiene un gerente aun" }],
    });
  }
  res.render("hotel/gerente/borrarGerente", {
    pagina: "Borrar Gerentes",
    nombre: nombreHotel,
    gr: ht,
  });
};
const accionBorrarGerente = async (req, res) => {
  await Gerente.destroy({
    where: {
      id_grt: req.query.id,
    },
  });
  res.redirect("/hotel/gerente/borrar?exito=true");
};
export { borrarGerente, accionBorrarGerente, accionBuscarHotel };
