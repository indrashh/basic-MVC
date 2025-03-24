// TodoView: adalah class yang berisi method yang akan menamilkan todo di terminal
class TodoView {
  static show(params) {
    params.forEach((param) => {
      const { id, task, status } = param;
      if (status) {
        console.log(`${id}. ${task} [X]`);
      } else {
        console.log(`${id}. ${task} [ ]`);
      }
    });
  }
}

module.exports = TodoView;
