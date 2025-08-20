class ToDo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random().toString();
  }
}
export default ToDo;
