let tasks = document.getElementsByClassName("taskItem")
for (const task of tasks) {
    task.addEventListener("dragstart",function(e){     
        let selectedTask = e.target
        TodoCol.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        TodoCol.addEventListener("drop",function(e){
            TodoCol.appendChild(selectedTask)
            selectedTask = null 
        })

        DoingCol.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        DoingCol.addEventListener("drop",function(e){
            DoingCol.appendChild(selectedTask)
            selectedTask = null 
        })

        DoneCol.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        DoneCol.addEventListener("drop",function(e){
            DoneCol.appendChild(selectedTask)
            selectedTask = null 
        })

    })
}