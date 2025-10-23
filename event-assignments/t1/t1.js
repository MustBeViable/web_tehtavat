// array for todo list
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

const body = document.querySelector('body');
const dialog = document.querySelector('dialog');
const ul = document.querySelector('ul');
let index = todoList.length;
const form = dialog.querySelector('form');
const inputModal = form.querySelector('input[type="text"]');

function addElements(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].completed) {
      ul.insertAdjacentHTML(
        'beforeend',
        `
      <li id="${list[i].id}">
        <input type="checkbox" id="todo-${list[i].id}" checked>
        <label for="todo-${list[i].id}">${list[i].task}</label>
        <button id="delete${list[i].id}">X</button>
      </li>
      `
      );
    } else {
      ul.insertAdjacentHTML(
        'beforeend',
        `
      <li id="${list[i].id}">
        <input type="checkbox" id="todo-${list[i].id}">
        <label for="todo-${list[i].id}">${list[i].task}</label>
        <button id="delete${list[i].id}">X</button>
      </li>
      `
      );
    }
    const input = document.getElementById(`todo-${list[i].id}`);
    input.addEventListener('change', () => {
      list[i].completed = !list[i].completed;
      input.checked = list[i].completed;
      console.log(list[i].completed);
      console.log(list);
    });
    const button = document.getElementById(`delete${list[i].id}`);
    button.addEventListener('click', () => {
      ul.removeChild(document.getElementById(list[i].id));
    });
  }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    index += 1;
    let id = index;
    const task = inputModal.value;
    console.log(task);
    todoList.push({
      id: id,
      task: task,
      completed: false,
    });
    ul.insertAdjacentHTML(
      'beforeend',
      `
      <li id="${id}">
        <input type="checkbox" id="todo-${id}">
        <label for="todo-${id}">${task}</label>
        <button id="delete${id}">X</button>
      </li>
      `
    );
    const input = document.getElementById(`todo-${id}`);
    input.addEventListener('change', () => {
      list[id].completed = !list[id].completed;
      input.checked = list[id].completed;
      console.log(list);
    });
    console.log(id);
    const button = document.getElementById(`delete${id}`);
    button.addEventListener('click', () => {
      ul.removeChild(document.getElementById(id));
    });
    form.reset();
    dialog.close();
  });
function addItemToList(list) {
  const form = dialog.querySelector('form');
  const saveButton = form.querySelector('button[type="submit"]');
  const inputModal = form.querySelector('input[type="text"]');
  saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    index += 1;
    let id = index;
    const task = inputModal.value;
    console.log(task);
    todoList.push({
      id: id,
      task: task,
      completed: false,
    });
    ul.insertAdjacentHTML(
      'beforeend',
      `
      <li id="${id}">
        <input type="checkbox" id="todo-${id}">
        <label for="todo-${id}">${task}</label>
        <button id="delete${id}">X</button>
      </li>
      `
    );
    const input = document.getElementById(`todo-${id}`);
    input.addEventListener('change', () => {
      list[id].completed = !list[id].completed;
      input.checked = list[id].completed;
      console.log(list);
    });
    console.log(id);
    const button = document.getElementById(`delete${id}`);
    button.addEventListener('click', () => {
      ul.removeChild(document.getElementById(id));
    });
    form.reset();
    dialog.close();
  });

}

const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', () => {
  form.reset();
  dialog.showModal();
});

addElements(todoList);
