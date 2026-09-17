const newButton = document.getElementById("new");
const list = document.getElementById("ft_list");

let todos = [];

newButton.addEventListener("click", function() {

    const todo = prompt("Enter a new TO DO:");

    if (todo !== null && todo.trim() !== "") {

        todos.unshift(todo);

        showTodos();
        saveTodos();
    }
});

function showTodos() {

    list.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {

        const item = document.createElement("div");
        const text = document.createElement("p");
        const button = document.createElement("button");

        item.className = "todo";

        text.textContent = todos[i];

        button.textContent = "X";

        item.appendChild(text);
        item.appendChild(button);

        button.addEventListener("click", function() {

            const answer = confirm("Do you want to remove this to-do item?");

            if (answer) {

                todos.splice(i, 1);

                showTodos();
                saveTodos();
            }
        });

        list.appendChild(item);
    }
}

function saveTodos() {

    document.cookie = "todos=" + JSON.stringify(todos);
}

function loadTodos() {

    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {

        if (cookie.startsWith("todos=")) {

            const data = cookie.substring(6);

            todos = JSON.parse(data);
        }
    }
}

loadTodos();
showTodos();