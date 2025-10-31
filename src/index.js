const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

answers.forEach((answer) => {
  answer.addEventListener("dragover", (event) => {
    // Test a custom type we will set later
    if (event.dataTransfer.types.includes("question")) {
      event.preventDefault();
    }
  });
});

console.log("questions", questions);
console.log("answers", answers);


questions.forEach((question) => {
  question.addEventListener("dragstart", (event) => {
    question.id = "dragged-question";
    event.dataTransfer.effectAllowed = "move";
    // Custom type to identify a question drag
      event.dataTransfer.setData("question", "");
      console.log("Dragging a question");
  });

  question.addEventListener("dragend", (event) => {
    question.removeAttribute("id");
  });
});


answers.forEach((answer) => {
  answer.addEventListener("drop", (event) => {
    event.preventDefault();

    const draggedTask = document.getElementById("dragged-question");
    // draggedTask.remove();
      // answer.children[1].appendChild(draggedTask);
      console.log("DraggedTask", draggedTask);
  });
});
