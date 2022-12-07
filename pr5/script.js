// huge thanks to "https://freshman.tech/todo-list/"
//set up an array where we’ll place the todo list items

let todoItems = [];

/* we want the page to be updated and the item rendered on the screen. We can do this pretty easily by appending a new li element for each item to .js-todo-list.*/

/*The insertAdjacentHTML() method allows us to add some HTML to the DOM using an already present element as a reference point. In this case, we’re using the .js-todo-list as a reference and appending a new li element for each todo item before its closing tag.*/

/* Notice that on each todo item, we have a data-key attribute that is set to the item’s id. This is an important step, as it allows us to locate a todo item easily in the DOM.*/

function renderTodo(todo) {
    const list = document.querySelector('.js-todo-list');
    list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input data-key="${todo.id}" type="checkbox"/>
       <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
          <svg width="24" height="24" viewBox="0 0 24 24"> <path d="M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z" /> </svg>
        </button>
    </li>
  `);
};

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo);
    renderTodo(todo);
};

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    const item = document.querySelector(`[data-key ='${key}']`);

    if (todoItems[index].checked) {
        item.classList.add('done');
    } else {
        item.classList.remove('done');
    }

};

function deleteTodo(key) {
    todoItems = todoItems.filter(item => item.id !== Number(key));
    const item = document.querySelector(`[data-key = '${key}']`);
    item.remove();

    const list = document.querySelector('.js-todo-list');
    if (todoItems.length === 0) list.innerHTML = '';
}
const form = document.querySelector('.js-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-todo-input');
    const text = input.value.trim();

    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});
// to mark the todos as compeleted
const list = document.querySelector('.js-todo-list');

list.addEventListener('click', event => {
    if (event.target.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }

    //to delete the items
    if (event.target.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});