const AddTask = document.getElementById("AddTask");
const poppup = document.getElementById("modal-task");
const ClosingPoppup = document.getElementById("IconClosePoppup")
const BackGroundPoppup = document.getElementById("BackGroundPoppup")
const Cancel = document.getElementById("Cancel")
const SubmitTheTask = document.getElementById("SubmitTheTask")

const floatingTextarea = document.getElementById("floatingTextarea")
const InputValue = document.querySelectorAll("input[required]").values

// Test Section
console.log(document.getElementById("Date").TEXT_NODE)

// Affichage Poppup
AddTask.onclick =()=>{
    poppup.style.display = "flex"
    BackGroundPoppup.style.display = "flex"
    alert("Hello world")
}
// Close The Poppup Window FUnction
function ClosePoppUp() {
    poppup.style.display = "none"
    BackGroundPoppup.style.display = "none"
}
// Close The Poppup When click over Submit Button
ClosingPoppup.onclick = () => ClosePoppUp();
// Close The Poppup When click over Cancel Button
Cancel.onclick = () => ClosePoppUp();

// Able And Disable The Submit Button To add New Task 
floatingTextarea.onkeyup = () =>{
    if (floatingTextarea.value.length >= 8 ) {
        SubmitTheTask.disabled = false
    }else if (floatingTextarea.value.length < 8 ) {
        SubmitTheTask.disabled = true
        
    }
}

// Add Tasks To Local Storage
SubmitTheTask.onclick = () =>{
    let id = parseInt(localStorage.getItem("id")) 
    localStorage.setItem("id", id += 1)
    const Task = {
        id: id ,
        title:  document.getElementById("exampleInputEmail1").value,
        priority: document.getElementById("floatingSelect").value,
        status:  document.getElementById("floatingSelect2").value,
        date: document.getElementById("Date").value,
        comment: document.getElementById("floatingTextarea").value
      }
    localStorage.setItem("task_"+Task.id, JSON.stringify(Task))
    alert("done")
}