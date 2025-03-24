//process.argv: mengambil input user melalui terminal
// variable command: mengambil hasil dari argv pada array kedua buat dijatidak pemgkodisian di switch
const command = process.argv[2];
// variable params; mengambil sisa parameter setelah command
const params = process.argv.slice(3);
// import TodoContorller dari folder controller
const TodoController = require("./controller/TodoController");

// switch: kondisi yang akan menentukan arah berjalanya program todo app ini
switch (command) {
  // jika command berisi "show" maka program ini yang akan berjalan
  case "show":
    TodoController.show();
    break;
  // jika command berisi "add" maka program ini yang akan berjalan
  case "add":
    TodoController.add(params);
    break;
  // jika command berisi "show" maka program ini yang akan berjalan
  case "delete":
    TodoController.delete(params);
    break;
  // jika command berisi "show" maka program ini yang akan berjalan
  case "update":
    TodoController.update(params);
    break;
  // jika command tidak berisi dari salah satu case diatas program ini akan otomatis berjalan
  default:
    TodoController.message("ini salah");
}
