import Habitacion from "../../model/hotel/Habitacion.mjs";

const getHabitaciones = async (req, res) => {
    try {
        const listaHabitaciones = await Habitacion.findAll();
        res.render("hotel/habitaciones", { listaHabitaciones });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createHabitacion = async (req, res) => {
    try {
        const {piso,nombre,refrigerador,id_htl} = req.body;
        const newHabitacion = await Habitacion.create({
            piso,
            nombre,
            refrigerador,
            id_htl
        });
        console.log(newHabitacion);
        res.send("Habitacion creada");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


export { getHabitaciones, createHabitacion };