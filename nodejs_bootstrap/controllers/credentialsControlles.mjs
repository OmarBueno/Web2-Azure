const peticionLogin = (req, res) => {
    res.render("credentials/login");
};

const peticionRegister = (req, res) => {
    res.render("credentials/register");
};

const peticionForgot = (req, res) => {
    res.render("credentials/forgot");
};

const peticonPost = async (req, res) => {
    console.log(req.body);
    // User.sync();
    // const user = await User.create(req.body);
    // const hotel = await Hotel.create(req.body);
    // const habitacion = await Habitacion.create(req.body);
    // const gerente = await Gerente.create(req.body);
    // res.json(user, hotel, habitacion, gerente);
};

export { peticionLogin, peticionRegister, peticionForgot, peticonPost };
