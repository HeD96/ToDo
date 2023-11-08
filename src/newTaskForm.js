export function NewTaskForm() {
    const appDisplay = document.querySelector(".app-display");

    const newTaskForm = document.createElement("div");
    newTaskForm.classList.add("task-form");

    const inputTitle = document.createElement("input");
    inputTitle.classList.add("input-title");
    inputTitle.setAttribute("type", "text");

    const inputTitleLabel = document.createElement("label");
    inputTitleLabel.textContent = "Title";

    const inputDescription = document.createElement("input");
    inputDescription.classList.add("input-description");
    inputDescription.setAttribute("type", "text");

    const inputDescriptionLabel = document.createElement("label");
    inputDescriptionLabel.textContent = "Description";

    const addBtn = document.createElement("button");
    addBtn.classList.add("add-btn");
    addBtn.textContent = "Add";

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.textContent = "Cancel";

    newTaskForm.append(
        inputTitleLabel,
        inputTitle,
        inputDescriptionLabel,
        inputDescription,
        addBtn,
        cancelBtn
    );

    appDisplay.append(newTaskForm);
}
