const UserService = require("../services/user.services");

exports.createUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
        const user = await UserService.createUser(name, email, password);
        // res.status(201).json(user);
        res.status(201).json({ message: "User created successfully", user: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await UserService.login(email, password);
        let tokenData = {
            _id: user._id,
            name: user.name,
            email: user.email
        }

        const token = await UserService.generateToken(tokenData, process.env.JWT_SECRET, "1h");
        // const token = await UserService.generateToken(tokenData, "4b4e4f9f-2d5b-448f-8f58-9c0b62a7e74a", "1h");
        res.status(200).json({ message: "User logged in successfully", token: token, user: tokenData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}