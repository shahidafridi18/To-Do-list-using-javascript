//variables 
const addtaskbtn = document.getElementById('add-task');
const taskcontainer = document.getElementById('task-container');
const inputtask = document.getElementById('input-task');

//event listener for add button

addtaskbtn.addEventListener("click", function () {

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputtask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);


    if (inputtask.value === "") {
        alert('Please enter a task!');
    }
    else {
        taskcontainer.appendChild(task);
    }

    inputtask.value="";

    checkButton.addEventListener("click",function(){
        checkButton.parentElement.style.textDecoration="line-through";
    })


    deleteButton.addEventListener("click",function(e){
          
        let target=e.target;
        target.parentElement.parentElement.remove();
    })





})