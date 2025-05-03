// Wrap the code in an Immediately Invoked Function Expression (IIFE)
// to prevent polluting the global namespace.
(function () {
    /**
     * Prompts the user for a valid task status.
     * Input is normalized to lowercase and trimmed.
     * Repeats the prompt until the user enters one of the allowed statuses.
     *
     * @param {number} taskNumber - The current task number (for prompt clarity).
     * @returns {string} - A valid status ("todo", "doing", or "done").
     */
    function promptValidStatus(taskNumber) {
      let status = prompt(
        "Enter status for task " + taskNumber + " (Todo, Doing, or Done):"
      );
      while (true) {
        if (status !== null) {
          status = status.toLowerCase().trim();
          if (status === "todo" || status === "doing" || status === "done") {
            return status;
          }
        }
        alert("Invalid status! Please enter either 'todo', 'doing', or 'done'.");
        status = prompt("Enter status for task " + taskNumber + " (Todo, Doing, or Done):");
      }
    }
  
    /**
     * Collects details for a task (title, description, and validated status).
     *
     * @param {number} taskNumber - The current task number for prompting.
     * @returns {object} - An object containing task details.
     */
    function getTaskDetails(taskNumber) {
      const title = prompt("Enter title for task " + taskNumber + ":");
      const description = prompt("Enter description for task " + taskNumber + ":");
      const status = promptValidStatus(taskNumber);
      return { title, description, status };
    }
  
    // Array to store two tasks.
    const tasks = [];
    for (let i = 1; i <= 2; i++) {
      tasks.push(getTaskDetails(i));
    }
  
    // Filter tasks that have been marked as "done".
    const completedTasks = tasks.filter(task => task.status === "done");
  
    // Log the results to the console.
    if (completedTasks.length > 0) {
      completedTasks.forEach(task => {
        console.log("Completed Task: " + task.title + " (" + task.status + ")");
      });
    } else {
      console.log("No tasks completed, let's get to work!");
    }
  })();
  