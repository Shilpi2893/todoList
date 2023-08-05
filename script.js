var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("Add button clicked");
}

var clearCompleted = document.getElementById("clear-completed-button");
clearCompleted.addEventListener("click", clearCompletedToDoItems);
function clearCompletedToDoItems() {
    alert(" Clear completed button clicked");
}

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyList);
function emptyList() {
    alert("Add Empty button");
}

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveList);
function saveList() {
    alert("Add Save button");
}