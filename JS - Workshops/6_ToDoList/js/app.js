document.addEventListener('DOMContentLoaded', function() {

    var inputTask = document.getElementById('taskInput');
    var buttonAddTask = document.getElementById('addTaskButton');
    var listTask = document.getElementById('taskList');
    var buttonRemoveFinishedTask = document.getElementById('removeFinishedTasksButton');
    var body = document.querySelector('body');
    var alert = document.querySelector('.alert');

    // event for Add Task Button
    buttonAddTask.addEventListener('click', function(event) {

        // First Condition for Task length value
        if (inputTask.value.length >= 5 && inputTask.value.length <= 100) {

            // delete alert innerText
            alert.innerText = "";

            // create new elementos of ul
            var newTask = document.createElement('li');
            var newH2 = document.createElement('h2');
            var newButtonDelete = document.createElement('button');
            var newButtonComplete = document.createElement('button');

            // event for Delete button
            newButtonDelete.addEventListener('click', function() {
                this.parentElement.parentElement.removeChild(newTask);
            });

            // event for Complete Button
            newButtonComplete.addEventListener('click', function() {
                this.previousElementSibling.previousElementSibling.classList.toggle('complete_h2');
            });

            newButtonComplete.innerText = "Complete"
            newButtonComplete.classList.add('Complete_button');

            // adds the created elements
            listTask.appendChild(newTask);
            newTask.appendChild(newH2);
            newTask.appendChild(newButtonDelete);
            newTask.appendChild(newButtonComplete);
            newH2.innerText = inputTask.value;
            inputTask.value = "";
            newButtonDelete.innerText = "Delete";

            // event for Remove Finished Task button
            removeFinishedTasksButton.addEventListener("click", function() {
                var toDeleteTask = listTask.querySelectorAll('li');
                for (var i = 0; i < toDeleteTask.length; i++) {
                    if (toDeleteTask[i].firstElementChild.className === "complete_h2") {
                        toDeleteTask[i].parentElement.removeChild(toDeleteTask[i]);
                    }
                }
            });
        }
        // First Condition for Task length value
        else if (inputTask.value.length < 5) {
            alert.innerText = "Your task is too short, it must have a minimum of 5 characters"
        }
        
        else {
            alert.innerText = "Your task is too long, it must have a maximum of 100 characters"
        }
    });

});
