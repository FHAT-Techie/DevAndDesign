let form = document.querySelector('form');
let toDo = document.querySelector('#enterTodo');
let toDoDisplaySec = document.querySelector('#todoSection');

let toDoArray = [];

document.addEventListener('DOMContentLoaded', (event) => {
    dataBack();
    toDoDisplay();
});

form.addEventListener('submit', dataCollector);

function dataCollector(event) {
    event.preventDefault();
    let toDoValue = toDo.value;
    let toDoObj = {
        toDoInput: toDoValue,
        toDoComplete: false
    };

    toDoArray.push(toDoObj);
    localStorage.setItem('toDoArray', JSON.stringify(toDoArray));

    form.reset();
    toDoDisplay();
}

// Bring data back from local storage
function dataBack() {
    let storedData = localStorage.getItem('toDoArray');
    if (storedData) {
        toDoArray = JSON.parse(storedData);
    } else {
        toDoArray = [];
    }
}

// Display data to UI
function toDoDisplay() {
    toDoDisplaySec.innerHTML = "";
    toDoArray.forEach(function(item, index) {
        let todoBox = document.createElement('div');
        todoBox.classList.add('todoBox');
        todoBox.setAttribute('id', `${index}`);

        let leftTodoBox = document.createElement('div');
        leftTodoBox.classList.add('leftTodoBox');

        let uncheckedCircle = document.createElement('i');
        uncheckedCircle.classList.add("fa-regular", "fa-circle");
        uncheckedCircle.setAttribute('data-action', 'uncheck');

        let checkedCircle = document.createElement('i');
        checkedCircle.classList.add("fa-solid", "fa-circle-check");
        checkedCircle.setAttribute('data-action', 'check');

        let toDoP = document.createElement('p');
        toDoP.textContent = item.toDoInput;

        let rightTodoBox = document.createElement('div');
        rightTodoBox.classList.add('rightTodoBox');

        let editIcon = document.createElement('i');
        editIcon.classList.add("fa-solid", "fa-pen-to-square");
        editIcon.setAttribute('data-action', 'edit');

        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add("fa-solid", "fa-trash");
        deleteIcon.setAttribute('data-action', 'delete');

        if (item.toDoComplete === false) {
            leftTodoBox.append(uncheckedCircle);
        } else {
            leftTodoBox.append(checkedCircle);
        }

        leftTodoBox.append(toDoP);
        rightTodoBox.append(editIcon, deleteIcon);
        todoBox.append(leftTodoBox, rightTodoBox);
        toDoDisplaySec.append(todoBox);
    });
}

toDoDisplaySec.addEventListener("click", targetTodoItems);

function targetTodoItems(event) {
    let userTarget = event.target;
    let grandparentElement = userTarget.closest('.todoBox');
    if (!grandparentElement) return;

    let todoID = Number(grandparentElement.id);
    let clickedAction = userTarget.dataset.action;

    if (clickedAction === 'uncheck') {
        toDoArray[todoID].toDoComplete = true;
        localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
        toDoDisplay();
    } else if (clickedAction === 'check') {
        toDoArray[todoID].toDoComplete = false;
        localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
        toDoDisplay();
    } else if (clickedAction === 'delete') {
        toDoArray.splice(todoID, 1);
        localStorage.setItem('toDoArray', JSON.stringify(toDoArray));
        toDoDisplay();
    } else if (clickedAction === 'edit') {
        // Handle the edit action here
    }
}
