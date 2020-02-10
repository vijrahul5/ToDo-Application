const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("li");
const ul = document.querySelector("ul");

form.addEventListener("submit",function(e1){
    e1.preventDefault();
    const text = input.value;
    const newli = document.createElement("li");
    newli.setAttribute("class","task")
    const newp = document.createElement("p");
    const newimg = document.createElement("img");
    newp.textContent = text;
    newimg.setAttribute("src","cancel.png");
    newli.appendChild(newp);
    newli.appendChild(newimg);
    ul.appendChild(newli);
    input.value ="";
    const myimg = newli.querySelector("img");
    addTaskToLS(text);
    myimg.addEventListener("click",removeTask);
});

function addTaskToLS(task){
    console.log(task);
    if(localStorage.getItem("TaskList") == null){
        const TaskList = [];
        TaskList.push(task);
        localStorage.setItem("TaskList",JSON.stringify(TaskList));
    }else{
        const sTaskList = localStorage.getItem("TaskList");
        console.log(sTaskList);
        const TaskList = JSON.parse(sTaskList);
        TaskList.push(task);

        localStorage.setItem("TaskList",JSON.stringify(TaskList));
    }
}

function removeTask(e){
    e.preventDefault();
    const parent = e.target.parentElement;
    const task = parent.querySelector("p").textContent;
    console.log(task);
    e.target.parentElement.remove();
    const sTaskList = localStorage.getItem("TaskList");
    const TaskList = JSON.parse(sTaskList);
    const nTaskList = [];
    for(var i = 0;i < TaskList.length;i++){
        if(TaskList[i] != task){
            nTaskList.push(TaskList[i]);
        }
    }
    localStorage.setItem("TaskList",JSON.stringify(nTaskList));
}

function get(){
    const sTaskList = localStorage.getItem("TaskList");
    const TaskList = JSON.parse(sTaskList);
    console.log(TaskList);
    for( var i = 0; i< TaskList.length;i++){
        const text = TaskList[i];
        const newli = document.createElement("li");
        newli.setAttribute("class","task")
        const newp = document.createElement("p");
        const newimg = document.createElement("img");
        newp.textContent = text;
        newimg.setAttribute("src","cancel.png");
        newli.appendChild(newp);
        newli.appendChild(newimg);
        ul.appendChild(newli);
        newimg.addEventListener("click",removeTask);
    }
}
get();