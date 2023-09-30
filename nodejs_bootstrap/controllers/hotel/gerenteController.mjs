import Gerente from "../../model/hotel/Gerente.mjs";

const getGerentes = async (req, res) => {
    const listaGerentes = await Gerente.findAll();
    console.log(listaGerentes);
    res.render("hotel/gerentes", { listaGerentes });
};

const createGerente = async (req, res) => {
    const { nombre, ap_paterno, ap_materno, telefono } = req.body;
    const newGerente = await Gerente.create({
        nombre,
        ap_paterno,
        ap_materno,
        telefono,
    });
    console.log(newGerente);
    res.send("Gerente creado");
};

export { getGerentes, createGerente };
