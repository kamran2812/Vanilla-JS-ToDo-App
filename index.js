const input = document.getElementById("inputText");
const todolist = document.querySelector(".todoList");
const button = document.querySelector(".search-container button");

// Function to create a new todo item
const createTodo = () => {
    let todoText = input.value.trim(); // Trim whitespace

    // Do not create an item if input is empty
    if (todoText === "") {
        return;
    }


    // Create a new list item
    const newTodoItem = document.createElement("li");
    newTodoItem.classList.add('task-item');

   

    // Set the inner HTML of the new item
    newTodoItem.innerHTML = `
        <p>${todoText}</p>
        <div class="task-buttons">
            <button class="btn done-button">Done</button>
            <button class="btn delete-button">Delete</button>
        </div>
    `;

    // Append  and new item to the list
    todolist.append(newTodoItem);

    // Clear the input field
    input.value = "";
}

// Add event listener to the button
button.addEventListener("click", () => {
    createTodo();
});

// Add event listener to detect Enter key press
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevent default action (like form submission)
        createTodo();
    }
});

// Event delegation for delete and done buttons
todolist.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-button")) {
        e.target.closest(".task-item").remove(); // Remove the task item
    } else if (e.target.classList.contains("done-button")) {
        e.target.closest(".task-item").querySelector("p").style.textDecoration = "line-through"; // Mark as done
    }
});

