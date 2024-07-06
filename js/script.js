{
    const tasks = [
    ];

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-deleteButton");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-doneButton");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleDone(index);
            });
        });
    };
    
    const render = () => {
        const listElement = document.querySelector(".js-tasks");
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <button class="section__done js-doneButton ${task.done ? " section__done--done" : ""}">${task.done? "✔" : ""}</button>
                <div class="section__task js-task${task.done ? " section__task--done" : ""}">${task.content}</div>
                <button class="section__bin js-deleteButton">🗑️</button>
            `
        };

        listElement.innerHTML = htmlString;

        bindEvents();
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newElement");
        const newTaskContent = document.querySelector(".js-newElement").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        newTaskElement.value = "";

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}