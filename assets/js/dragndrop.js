
let tasks = document.getElementsByClassName("taskItem")

for (const task of tasks) {
    task.addEventListener("dragstart",function(e){     
        let idKey = e.target.id;
        let selectedTask = e.target;


        let taskItems = localStorage.getItem("task_"+idKey)
        let theObjectTask = JSON.parse(taskItems);

        task.style.backgroundColor ="pink"



        TodoCol.addEventListener("dragover",function(e){
            task.style.backgroundColor ="white"
            task.style.height ="100%"
            task.style.border ="none"
            task.style.width ="100%"
            e.preventDefault();
        })
        TodoCol.addEventListener("drop",function(e){
            theObjectTask.status = "Yet"
            TodoCol.appendChild(selectedTask)
            selectedTask = null 
            localStorage.setItem("task_"+idKey, JSON.stringify(theObjectTask)) 
            document.getElementById("to-do-tasks-count").innerHTML = e.target.childElementCount
            task.style.backgroundColor ="white"

        })

        DoingCol.addEventListener("dragover",function(e){
            task.style.backgroundColor ="white"
            task.style.height ="100%"
            task.style.border ="none"
            task.style.width ="100%"
            e.preventDefault();
        })
        DoingCol.addEventListener("drop",function(e){
            
            theObjectTask.status = "Doing"
            DoingCol.appendChild(selectedTask)
            selectedTask = null 
            localStorage.setItem("task_"+idKey, JSON.stringify(theObjectTask)) 
            document.getElementById("in-progress-tasks-count").innerHTML = e.target.childElementCount
            task.style.backgroundColor ="white"
        })

        DoneCol.addEventListener("dragover",function(e){
            task.style.backgroundColor ="white"
            task.style.height ="100%"
            task.style.border ="none"
            task.style.width ="100%"
            e.preventDefault();
        })
        DoneCol.addEventListener("drop",function(e){
            theObjectTask.status = "Done"
            DoneCol.appendChild(selectedTask)
            selectedTask = null 
            localStorage.setItem("task_"+idKey, JSON.stringify(theObjectTask)) 
            document.getElementById("done-tasks-count").innerHTML = e.target.childElementCount
            task.style.backgroundColor ="white"
        })

    })
}