import Gerente from "../../../models/hotel/Gerente.mjs";
import { Hotel } from "../../../models/hotel/Hotel.mjs";
const consultaGerente = async (req, res) => {
  const gerentes = await Gerente.findAll({
    include: {
      model: Hotel,
    },
    raw: true,
    nest: true,
  });
  res.render("hotel/gerente/consultagerente", {
    pagina: "Lista de Gerentes",
    gerente: gerentes,
  });
};
export { consultaGerente };
