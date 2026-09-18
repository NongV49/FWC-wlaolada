let todos = [];

$("#new").click(function() {

    const todo = prompt("Enter a new TO DO:");

    if (todo !== null && todo.trim() !== "") {
        todos.unshift(todo);
        showTodos();
        saveTodos();
    }
});

function showTodos() {

    $("#ft_list").html("");

    for (let i = 0; i < todos.length; i++) {

        const item = $("<div>");
        const text = $("<p>");
        const button = $("<button>");

        item.addClass("todo");

        text.text(todos[i]);

        button.text("X");

        item.append(text);
        item.append(button);

        button.click(function() {

            const answer = confirm("Do you want to remove this to-do item?");

            if (answer) {
                todos.splice(i, 1);
                showTodos();
                saveTodos();
            }
        });

        $("#ft_list").append(item);
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