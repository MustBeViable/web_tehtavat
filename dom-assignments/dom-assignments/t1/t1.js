
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function addElements(list) {
  const ul = document.querySelector("ul");
  for (let i=0; i<list.length; i++) {
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        <input type="checkbox" id="todo-${list[i].id}" ${list[i].completed ? "checked" : ""}>
        <label for="todo-${list[i].id}">${list[i].task}</label>
      </li>
      `
    );
  }
}

addElements(todoList);
