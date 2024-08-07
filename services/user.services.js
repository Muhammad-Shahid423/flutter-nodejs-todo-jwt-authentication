const UserModel = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserService {
    static async createUser(name, email, password) {
        try {
            const user = await UserModel.create({ name, email, password });
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async login(email, password) {
        try {
            const user = await UserModel.findOne({ email });
            if (!user) {
                throw new Error("User not found");
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error("Incorrect password");
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async generateToken(tokenData, secretKey, expiresIn) {
        try {
            const token = await jwt.sign(tokenData, secretKey, { expiresIn: expiresIn });
            return token;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;