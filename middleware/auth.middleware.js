// auth.middleware.js
const jwt = require("jsonwebtoken");
// const secretKey = "4b4e4f9f-2d5b-448f-8f58-9c0b62a7e74a";

module.exports = function (req, res, next) {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.status(401).json({ message: "Access Denied. No token provided." });

    const token = authHeader.split(" ")[1]; // Extract the token from the "Bearer <token>" format
    if (!token) return res.status(401).json({ message: "Access Denied. Token missing." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ message: "Invalid token." });
    }
};