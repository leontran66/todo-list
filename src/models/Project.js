class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  getName() {
    return this.name;
  }

  add(Todo) {
    this.todos.push(Todo);
  }

  remove(index) {
    this.todos = this.todos.splice(this.todos[index], 1);
  }
};

export default Project;
