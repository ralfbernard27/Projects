const allTask = [];

function addItem () {
    const inputTask = document.getElementById("input");
    let InputedTask = inputTask.value.trim();

    if (InputedTask !== '') {
        allTask.push({
            name: InputedTask,
            isDone: false,
        });

    }
    inputTask.value = '';
    displayTasks();
}

function toggleTask (index) {
    allTask[index].isDone = !allTask[index].isDone;
    displayTasks();
}

function deleteTask(index) {
    allTask.splice(index, 1);
    displayTasks();
}

function displayTasks () {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';

    for (let i = 0; i < allTask.length; i++) {
        const taskItem = document.createElement("li");
        const task = allTask[i];
        taskItem.innerText = task.name;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";

        if (task.isDone) {
            taskItem.classList.add("checked");
            removeBtn.disabled = true;
            removeBtn.innerHTML = "Done";
        }

        taskItem.addEventListener("click", () => {
            toggleTask(i);
            
        });
        removeBtn.addEventListener("click", () => deleteTask(i));
        
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);
    }
}

