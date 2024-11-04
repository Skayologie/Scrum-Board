
const TrashButtonUnder = document.getElementById("TrashButtonUnder")
for (const task of tasks) {
    task.addEventListener("dragstart",function(e){    
        console.log(e)
        let idKey = e.target.id;

        TrashButtonUnder.addEventListener("dragover",function(e){
            e.preventDefault();
        })
        TrashButtonUnder.addEventListener("drop",function(e){
            ConfirmationPoppup(idKey)
        })
    })
}

