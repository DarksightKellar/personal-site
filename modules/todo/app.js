// Todo App - In-memory storage with limits
const MAX_TODOS = 20;
const MAX_TEXT_LENGTH = 100;

const todos = [
    { id: 1, text: 'Learn JavaScript', completed: true },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Deploy to production', completed: false },
];

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Set max length on input
input.maxLength = MAX_TEXT_LENGTH;

function render() {
    list.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="checkbox ${todo.completed ? 'completed' : ''}" onclick="toggle(${todo.id})">
                ${todo.completed ? '✓' : ''}
            </div>
            <span class="todo-text ${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button class="delete-btn" onclick="remove(${todo.id})">✕</button>
        `;
        list.appendChild(li);
    });

    // Update input placeholder with remaining count
    const remaining = MAX_TODOS - todos.length;
    if (remaining <= 0) {
        input.placeholder = 'Max todos reached';
        input.disabled = true;
    } else {
        input.placeholder = `Add a todo... (${remaining} left)`;
        input.disabled = false;
    }
}

function add(text) {
    if (todos.length >= MAX_TODOS) return;
    const trimmed = text.slice(0, MAX_TEXT_LENGTH);
    todos.push({ id: Date.now(), text: trimmed, completed: false });
    render();
}

function toggle(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        render();
    }
}

function remove(id) {
    const index = todos.findIndex(t => t.id === id);
    if (index > -1) {
        todos.splice(index, 1);
        render();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() && todos.length < MAX_TODOS) {
        add(input.value.trim());
        input.value = '';
    }
});

// Initial render
render();
