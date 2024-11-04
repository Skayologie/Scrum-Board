let tasks = document.getElementsByClassName("taskItem")
for (const task of tasks) {
    task.addEventListener("dragstart",function(e){     
        let idKey = e.target.id;
        let task = localStorage.getItem("task_"+idKey)
        let theObjectTask = JSON.parse(task);
        console.log(theObjectTask.status)



        let selectedTask = e.target;

        TodoCol.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        TodoCol.addEventListener("drop",function(e){
            theObjectTask.status = "Yet"
            TodoCol.appendChild(selectedTask)
            selectedTask = null 
            localStorage.setItem("task_"+idKey, JSON.stringify(theObjectTask)) 
            document.getElementById("to-do-tasks-count").innerHTML = e.target.childElementCount


        })

        DoingCol.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        DoingCol.addEventListener("drop",function(e){
            theObjectTask.status = "Doing"
            DoingCol.appendChild(selectedTask)
            selectedTask = null 
            localStorage.setItem("task_"+idKey, JSON.stringify(theObjectTask)) 
            document.getElementById("in-progress-tasks-count").innerHTML = e.target.childElementCount
        })

        DoneCol.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        DoneCol.addEventListener("drop",function(e){
            theObjectTask.status = "Done"
            DoneCol.appendChild(selectedTask)
            selectedTask = null 
            localStorage.setItem("task_"+idKey, JSON.stringify(theObjectTask)) 
            document.getElementById("done-tasks-count").innerHTML = e.target.childElementCount
        })

    })
}