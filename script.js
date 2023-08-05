///// Idhar hum buttons ko listen kar rahe hai

var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
    // alert("Add button clicked");
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
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

//// Idhar hum list add karenge input se

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem( itemNext, completed ) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemNext);
    toDoItem.appendChild(toDoText);

    if( completed ) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
    if( this.classList.contains("completed") ) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}