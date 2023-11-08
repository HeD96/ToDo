export function AppBodyRender() {
    const bodyApp = document.querySelector("#app-body");

    const menuPanel = document.createElement("div");
    menuPanel.classList.add("menu-panel");
    const appDisplay = document.createElement("div");
    appDisplay.classList.add("app-display");

    bodyApp.append(menuPanel, appDisplay);

    const profile = document.createElement("div");
    profile.classList.add("user-profile");

    const taskSection = document.createElement("div");
    taskSection.classList.add("task-section");

    const taskSectionTitle = document.createElement("h1");
    taskSectionTitle.textContent = "Tasks";

    const addTaskButton = document.createElement("button");
    taskSectionTitle.append(addTaskButton);
    addTaskButton.classList.add("add-task");
    addTaskButton.textContent = "+";

    const todayTasks = document.createElement("p");
    todayTasks.classList.add("today-tasks");
    todayTasks.textContent = "Today";

    const upcomingTasks = document.createElement("p");
    upcomingTasks.classList.add("upcoming-tasks");
    upcomingTasks.textContent = "Upcoming";

    const completedTasks = document.createElement("p");
    completedTasks.classList.add("completed-tasks");
    completedTasks.textContent = "Completed";

    taskSection.append(
        taskSectionTitle,
        todayTasks,
        upcomingTasks,
        completedTasks
    );

    const projectSection = document.createElement("div");
    projectSection.classList.add("project-section");

    const projectSectionTitle = document.createElement("h1");
    projectSectionTitle.textContent = "My Projects";

    projectSection.append(projectSectionTitle);

    menuPanel.append(profile, taskSection, projectSection);
}
