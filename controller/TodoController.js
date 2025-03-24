// import Todo dari folder model
const Todo = require("../model/Todo");
// import TodoView dari folder view
const TodoView = require("../view/TodoView");

// class yang alur code mau ke model atau ke view
class TodoController {
  static show() {
    const todos = Todo.show();
    TodoView.show(todos);
  }

  static add(params) {
    Todo.add(params);
  }

  static delete(params) {
    Todo.delete(params);
  }

  static update(params) {
    Todo.update(params);
  }
}

module.exports = TodoController;
