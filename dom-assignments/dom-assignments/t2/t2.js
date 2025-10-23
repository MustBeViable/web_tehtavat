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
function listMaker(list) {
  const ul = document.querySelector("ul");
  for (let i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.id = `todo-${list[i].id}`;
    cb.checked = list[i].completed;

    const label = document.createElement('label');
    label.htmlFor = `todo-${list[i].id}`;
    label.textContent = list[i].task;

    li.append(cb, label);

    ul.appendChild(li);
  }
}

listMaker(todoList);
