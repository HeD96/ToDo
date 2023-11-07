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

    const projectSection = document.createElement("div");
    projectSection.classList.add("project-section");

    menuPanel.append(profile, taskSection, projectSection);
}
