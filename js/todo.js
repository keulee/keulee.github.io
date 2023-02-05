const todoForm = document.querySelector(".todo-form");
const inputTodo = todoForm.querySelector("input");
const showTodoBtn = document.querySelector(".todo-div button");
const todoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";
const LIST_KEY = "list";
let isListOpen = true;
let toDos = [];

// console.log(showTodoBtn);
showTodoBtn.hidden = true;

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function lineThroughTodo(event) {
  //   console.log("clicked");
  const li = event.target;
  //   console.log(li);
  li.style.textDecoration = "line-through";
}

function showDeleteBtn(event) {
  //   console.log("button show");
  const li = event.target;
  const button = document.createElement("button");
  button.innerText = "x";
  li.appendChild(button);
  button.addEventListener("click", deleteTodo);
}

function removeBtn() {
  const button = document.querySelector("li button");
  button.remove();
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
  const saved = localStorage.getItem(TODOS_KEY);
  if (saved === "[]") showTodoBtn.hidden = true;
}

function listingTodo(todo) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = todo.text;
  li.id = todo.id;
  ul.appendChild(li);
  li.addEventListener("click", lineThroughTodo);
  li.addEventListener("mouseenter", showDeleteBtn);
  li.addEventListener("mouseleave", removeBtn);
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const newTodo = inputTodo.value;
  inputTodo.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  listingTodo(newTodoObj);
  saveTodos();
  showTodoBtn.hidden = false;
}

function handleShowTodoBtn(event) {
  //   console.log("clicked");
  event.preventDefault();
  const loadValue = localStorage.getItem(LIST_KEY);
  if (isListOpen === true || loadValue === "true") {
    showTodoBtn.innerText = "Show Todo List";
    todoList.hidden = true;
    isListOpen = false;
    localStorage.setItem(LIST_KEY, isListOpen);
  } else if (isListOpen === false || loadValue === "false") {
    showTodoBtn.innerText = "Hide Todo List";
    todoList.hidden = false;
    isListOpen = true;
    localStorage.setItem(LIST_KEY, isListOpen);
  }
}

todoForm.addEventListener("submit", handleSubmitTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);
showTodoBtn.addEventListener("click", handleShowTodoBtn);

if (savedTodos !== null && savedTodos !== "[]") {
  const savedList = localStorage.getItem(LIST_KEY);
  if (savedList === "false") {
    isListOpen = false;
    todoList.hidden = true;
    showTodoBtn.innerText = "Show Todo List";
  } else {
    todoList.hidden = false;
  }
  showTodoBtn.hidden = false;
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(listingTodo);
} else {
  showTodoBtn.hidden = true;
}
