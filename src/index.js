import "./style.css";
import { AppBodyRender } from "./app-body.js";
import { NewTaskForm } from "./newTaskForm.js";

AppBodyRender();

const addNewTask = document.querySelector(".add-task");
addNewTask.addEventListener("click", NewTaskForm);
