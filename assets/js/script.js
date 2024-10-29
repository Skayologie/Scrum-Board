const AddTask = document.getElementById("AddTask");
const poppup = document.getElementById("modal-task");
const ClosingPoppup = document.getElementById("IconClosePoppup")
const BackGroundPoppup = document.getElementById("BackGroundPoppup")
const Cancel = document.getElementById("Cancel")

// Affichage Poppup
AddTask.onclick =()=>{
    poppup.style.display = "flex"
    BackGroundPoppup.style.display = "flex"
}
function ClosePoppUp() {
    poppup.style.display = "none"
    BackGroundPoppup.style.display = "none"
}
ClosingPoppup.onclick = () => ClosePoppUp();
Cancel.onclick = () => ClosePoppUp();