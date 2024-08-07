const TodoService = require("../services/todo.services");

exports.createTodo = async (req, res, next) => {
    const userId = req.user._id;
    const { title, description } = req.body;
    try {
        const todo = await TodoService.createTodo(userId, title, description);
        res.status(201).json({ message: "Todo created successfully", todo: todo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.getTodos = async (req, res, next) => {
    const userId = req.user._id;
    try {
        const todos = await TodoService.getTodos(userId);
        res.status(200).json({ message: "Todos fetched successfully", todos: todos });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}