const columns = document.querySelectorAll(".task-column");

columns.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    // Test a custom type we will set later
    if (event.dataTransfer.types.includes("task")) {
      event.preventDefault();
    }
  });
});

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("dragstart", (event) => {
    task.id = "dragged-task";
    event.dataTransfer.effectAllowed = "move";
    // Custom type to identify a task drag
    event.dataTransfer.setData("task", "");
  });

  task.addEventListener("dragend", (event) => {
    task.removeAttribute("id");
  });
});


columns.forEach((column) => {
  column.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-task");
    draggedTask.remove();
    column.children[1].appendChild(draggedTask);
  });
});
