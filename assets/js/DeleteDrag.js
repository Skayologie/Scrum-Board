
const TrashButtonUnder = document.getElementById("TrashButtonUnder")
for (const task of tasks) {
    task.addEventListener("dragstart",function(e){    
        console.log(e)
        let idKey = e.target.id;
        let selectedTask = e.target;

        let taskItems = localStorage.getItem("task_"+idKey)
        let theObjectTask = JSON.parse(taskItems);


        TrashButtonUnder.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        TrashButtonUnder.addEventListener("drop",function(e){
            console.log("deleted")
            ConfirmationPoppup(idKey)
        })



    })
}

