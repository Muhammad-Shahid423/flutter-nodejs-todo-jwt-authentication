const router = require("express").Router();
const TodoController = require("../contoller/todo.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/createTodo", authMiddleware, TodoController.createTodo);
router.get("/getTodos", authMiddleware, TodoController.getTodos);

module.exports = router;