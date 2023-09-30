import Hotel from "../../model/hotel/Hotel.mjs";

const getHoteles = async (req, res) => {
    try {
        const listaHoteles = await Hotel.findAll();
        res.render("hotel/hoteles", { listaHoteles });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createHotel = async (req, res) => {
    try {
        const { nombre, direccion, telefono, correo, id_grt } = req.body;
        const newHotel = await Hotel.create({
            nombre,
            direccion,
            telefono,
            correo,
            id_grt,
        });
        console.log(newHotel);
        res.send("Hotel creado");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export { getHoteles, createHotel };