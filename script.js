// Get the todo list element
const todoList = document.getElementById('todo-items');

// Get the add todo form element
const addTodoForm = document.getElementById('add-todo-form');

// Get the todo input element
const todoInput = document.getElementById('todo-input');

// Initialize an empty array to store todo items
let todoItems = [];

// Function to add a new todo item
function addTodoItem(item) {
    // Create a new todo item object
    const todoItem = {
        text: item,
        completed: false
    };

    // Add the todo item to the array
    todoItems.push(todoItem);

    // Render the todo item in the list
    renderTodoItem(todoItem);
}

// Function to render a todo item in the list
function renderTodoItem(todoItem) {
    // Create a new list item element
    const listItem = document.createElement('li');

    // Add the todo item text to the list item
    const todoText = document.createTextNode(todoItem.text);
    listItem.appendChild(todoText);

    // Add a checkbox to mark the todo item as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoItem.completed;
    checkbox.addEventListener('change', () => {
        todoItem.completed = checkbox.checked;
        renderTodoList();
    });
    listItem.appendChild(checkbox);

    // Add a delete button to remove the todo item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        // Remove the todo item from the array
        todoItems = todoItems.filter(item => item.text !== todoItem.text);

        // Render the updated todo list
        renderTodoList();
    });
    listItem.appendChild(deleteButton);

    // Add the list item to the todo list
    todoList.appendChild(listItem);

    // Add a fade-in animation to the list item
    listItem.classList.add('fade-in');
}

// Function to render the todo list
function renderTodoList() {
    // Clear the todo list
    todoList.innerHTML = '';

    // Render each todo item in the list
    todoItems.forEach(todoItem => {
        renderTodoItem(todoItem);
    });
}

// Event listener for the add todo form
addTodoForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the todo item text from the input field
    const todoItemText = todoInput.value.trim();

    // Check if the todo item text is not empty
    if (todoItemText) {
        // Add the todo item to the array
        addTodoItem(todoItemText);

        // Clear the input field
        todoInput.value = '';
    }
});