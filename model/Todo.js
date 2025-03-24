const fs = require("fs");

class Todo {
  constructor(id, task, status) {
    (this.id = id), (this.task = task), (this.status = status || false);
  }
  //   getTodos akan mengambil data dari data.json dan merubahnya(parsing) menjadi objek js dan merturn hasilnya
  static getTodos() {
    let data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    let todos = data.map((todo) => {
      const { id, task, status } = todo;
      return new Todo(id, task, status);
    });
    return todos;
  }

  //  show() mengambil nilai dari getTodos dan mengembalikan nilainya
  static show() {
    let todos = this.getTodos();
    return todos;
  }

  // add(): untuk menambahkan nilai ke todos dengan mengggunakan push
  static add(params) {
    let todos = this.getTodos();
    // mengambil id terakhir dari todos + 1
    let id = todos[todos.length - 1].id + 1;
    let task = params[0];
    let temp = new Todo(id, task, true);
    todos.push(temp);
    this.save(todos);
  }

  //   delete(): untuk menghapus dengan high order fungsi .filter() buat menampilan selain id yang diterima(dihapus)
  static delete(params) {
    let todos = this.getTodos();
    let id = +params;
    todos = todos.filter((todo) => todo.id !== id);
    this.save(todos);
  }

  // update(): untuk merubah isi task dengan dengan menyamakan id dari input dan merubah task yang ada dengan task yang baru dengan .map()
  static update(params) {
    let todos = this.getTodos();
    let id = +params[0];
    let task = params[1];
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.task = task;
      }
      return todo;
    });
    this.save(todos);
  }

  //   save(): menulis ulang data yang sudah ada dengan data yang baru
  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }
}

module.exports = Todo;
