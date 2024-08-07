const TodoModel = require("../models/todo_model");

class TodoService {
    static async createTodo(userId, title, description) {
        try {
            const todo = await TodoModel.create({ userId, title, description });
            return todo;
        } catch (error) {
            throw error;
        }
    }
    
    static async getTodos(userId) {
        try {
            const todos = await TodoModel.find({ userId });
            return todos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TodoService;