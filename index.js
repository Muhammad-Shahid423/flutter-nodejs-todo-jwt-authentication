const app = require("./app");
const UserModel = require("./models/user_model");
const TodoModel = require("./models/todo_model");

// const PORT = process.env.PORT || 5000;
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});