let $ = document;
let todoItem = $.getElementById("todo-item");
let todoList = $.getElementsByClassName("todos");



function deleteTodo(event){
    (event.target.parentNode).remove()
}

todoItem.addEventListener("keydown", function (event) {
  let newTodo;
  let newTodoSpan;
  let newTodoIcon;
  if (event.target.value.length !== 0) {
    // create todo and add class
    newTodo = $.createElement("li");
    newTodo.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    // create todo span ,innerhtml & append to parent
    newTodoSpan = $.createElement("span");
    newTodoSpan.innerHTML = event.target.value;
    newTodo.appendChild(newTodoSpan);
    // create todo icon ,style & append to parent
    newTodoIcon = $.createElement("i");
    newTodoIcon.classList.add('fa','fa-trash-o','delete')
    newTodo.appendChild(newTodoIcon);
    newTodoIcon.addEventListener('click',deleteTodo)
  }
  if (event.keyCode === 13 && event.target.value.length !== 0) {
    event.preventDefault();
    todoList[0].appendChild(newTodo);
    todoItem.value = "";
  }
});
