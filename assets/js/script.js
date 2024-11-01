  // Variables Global
  const AddTask = document.getElementById("AddTask");
  const poppup = document.getElementById("modal-task");
  const ClosingPoppup = document.getElementById("IconClosePoppup")
  const Cancel = document.getElementById("Cancel")
  const SubmitTheTask = document.getElementById("SubmitTheTask")
  const TodoCol = document.getElementById("div1")
  const DoingCol = document.getElementById("div2")
  const DoneCol = document.getElementById("div3")
  const cardTask = document.getElementsByClassName("cardTask")
  const PoppUpContainer = document.getElementById("PoppUpContainer")
  const floatingTextarea = document.getElementById("floatingTextarea")
  const InputValue = document.querySelectorAll("input[required]").values
  const TheTitleInput = document.getElementById("exampleInputEmail1")
  const TodoTaskCount = document.getElementById("to-do-tasks-count");


// Create The Main ID in our localStorage if not exist
  if (localStorage.getItem("id") == null) {
    localStorage.setItem("id",0)
  }


// SHOW CURRENT DATE IN INPUT DATE
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("Date").value = today;

///////////////////////////////  Global Functions  ///////////////////////////////////////////
//----------------- The Submit Button Mode(Disable , Enable ) Function ---------------------//
  function DisableAbleSubmitButton(TheInput){
    if (TheInput.value.length >= 8) {
        SubmitTheTask.disabled = false
    }else if (TheInput.value.length < 8) {
        SubmitTheTask.disabled = true
  }}
//------------------------------------------------------------------------------------------//


//----------------------- The PoppUp Generale Function -------------------------------------//
  function PoppUp(status) {
    poppup.style.display = status

    if (status === "flex") {
      document.getElementById("DeleteTheTask").classList.add("d-none")
      document.getElementById("SubmitTheTask").classList.remove("d-none")
      PoppUpContainer.innerHTML = `
      <div class="mb-3">
            <label for="exampleInputEmail1" aria-autocomplete="both" class="form-label">Title</label>
            <input data-parsley-minlength="8" data-parsley-minlength-message="You Have To Enter At Least 8 Letters On Title !!" type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>

          <div>
            <label  for="exampleInputEmail1 " class="form-label ">Type</label>
            <div class="form-check gap-2 d-flex ">
              <input  class="form-check-input align-self-center" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                Feature
              </label>
            </div>
            <div>
              <div class="form-check gap-2 d-flex">
                <input required class="form-check-input align-self-center" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                <label class="form-check-label" for="flexRadioDefault2">
                  Bug
                </label>
              </div>
            </div>
          </div>

          <div class="form">
            <label for="exampleInputEmail1" class="form-label">Priority</label>
            <select required="" class="form-select" id="floatingSelect" aria-label="Floating label select example">
              <option disabled selected>Please Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div class="form">
            <label for="exampleInputEmail1" class="form-label">Status</label>
            <select required="" class="form-select" id="floatingSelect2" aria-label="Floating label select example">
              <option disabled selected>Please Select</option>
              <option value="Yet">Not Yet</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Date</label>
            <input required type="date" class="form-control" id="Date" aria-describedby="emailHelp">
          </div>

          <div class="form-label">
            <label>Comments</label>
            <textarea  data-parsley-minlength="10" data-parsley-minlength-message="You Have To Enter At Least 10 Letters On Comment !!"  required class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          </div>
      `
      
    }
  }
//------------------------------------------------------------------------------------------//


//////////////////////////////////////////////////////////////////////////////////////////////


//--------------------------- The PoppUp Controller ----------------------------------------//
// Affichage Poppup
  AddTask.onclick =()=>PoppUp("flex") 
// Close The Poppup When click over Submit Button
  ClosingPoppup.onclick = () => PoppUp("none");
// Close The Poppup When click over Cancel Button
  Cancel.onclick = () => PoppUp("none");
//------------------------------------------------------------------------------------------//

//-------------- The Submit Button Mode Use for anable The Submit btn ----------------------//
  floatingTextarea.onkeyup = () => DisableAbleSubmitButton(floatingTextarea)
  TheTitleInput.onkeyup = () => DisableAbleSubmitButton(floatingTextarea)
//------------------------------------------------------------------------------------------//


//---------------- Event to Handle Click For Add Tasks To Local Storage -------------------//
SubmitTheTask.onclick = () =>{
  /* 
  This Id Variable For Get "id" Item From Local storage That Already exist ,
  and Defined by 0 as begin value
  */
  let id = parseInt(localStorage.getItem("id")) 
  // increment The Value Of The Id When the user clicked over submit button 
  localStorage.setItem("id", id += 1)

  // create an Task Object That include All Details Of One Task
  const Task = {
      id: id ,
      title:  document.getElementById("exampleInputEmail1").value,
      priority: document.getElementById("floatingSelect").value,
      status:  document.getElementById("floatingSelect2").value,
      date: document.getElementById("Date").value,
      comment: document.getElementById("floatingTextarea").value
  }
  // Stock The Task Object On The Local Storage With the JSON Stringify Method For Send The
  // Javascript Object As String to the web server And Manipulate it
  localStorage.setItem("task_"+Task.id, JSON.stringify(Task))
}
//------------------------------------------------------------------------------------------//
//---------------- Event to Handle Click For Update Tasks To Local Storage --------------------//
function RemoveWithId(id){
  let key = "task_"+id
  console.log(JSON.parse(localStorage.getItem(key)))
  localStorage.removeItem(key)
  poppup.style.display = "flex"
}
function ConfirmationPoppup(id){
      poppup.style.display = "flex"
      document.getElementById("DeleteTheTask").classList.remove("d-none")
      document.getElementById("SubmitTheTask").classList.add("d-none")
      PoppUpContainer.innerHTML = `<label for="exampleInputEmail1" aria-autocomplete="both" class="form-label">Delete item Number ${id} ??</label> `
      document.getElementById("DeleteTheTask").onclick = () =>{
        RemoveWithId(id)
      }
}

//------------------------------------------------------------------------------------------//


// Declare And Define Task Counter of each Col ( Done(0) , Doing(0) , Not yet(0) )
let CounterTodo = 0;
let CounterDoing = 0;
let CounterDone = 0;


// loop The Local storage Data , 
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    // Get the All Items And Filter Them With | startWith method for separate the Values That begin with task_ 
    if (key.startsWith("task_")) {
      // After separate Them We store it in "TheObjectTask" Variable 
        theObjectTask = JSON.parse(localStorage.getItem(key));
        // and after all we want to separate The Yet , doing and Done Columns 
        // yet Col
        if (theObjectTask.status === "Yet") {
            TheCardButtonContent(TodoCol,"fa-circle-question")
            CounterTodo++
        }
        // Doing Col
        if (theObjectTask.status === "Doing") {
            TheCardButtonContent(DoingCol,"fa-solid fa-spinner")
            CounterDoing++
        }
        // Done Col
        if (theObjectTask.status === "Done") {
            TheCardButtonContent(DoneCol,"fa-circle-check")
            CounterDone++
        }   
    }
}

// Change The Task Counter
document.getElementById("to-do-tasks-count").innerText = CounterTodo
document.getElementById("in-progress-tasks-count").innerText = CounterDoing
document.getElementById("done-tasks-count").innerText = CounterDone

// Function That Added A content If The User Add A task This Function Take Two Params 
// Column param like Doing , yet or done column to change there conter task To th current Number of the task
function TheCardButtonContent(column,icon){
          column.innerHTML += `
                <button id="${theObjectTask.id}" class="cardTask d-flex pt-3 pb-3 ">
                  <div class="TodoIcon m-3 mt-1 ">
                    <i class="fs-4 text-success fa-regular ${icon}"></i>
                  </div>
                  <div class="cardContent d-flex flex-column align-items-start w-100 gap-1">
                    
                    <div class="h4 mb-0">
                      ${theObjectTask.title}
                    </div>
                    
                    <div class="">
                      <div class="text-gray d-flex flex-column align-items-start">#${theObjectTask.id} created in ${theObjectTask.date}</div>
                      <div class="d-flex justify-content-start">${theObjectTask.comment}</div>
                    </div>

                    <div class="d-flex justfy-content-start gap-1 ">
                      <span class="bg-blue text-white p-1 rounded-2 ">${theObjectTask.priority}</span>
                      <span class="bg-gray p-1 rounded-2">${theObjectTask.priority}</span>
                    </div>
                  </div>
                  <div onclick=ConfirmationPoppup(${theObjectTask.id}) id="Remove${theObjectTask.id}" class="align-self-center RemoveTask TodoIcon m-3 mt-1 ">
                    <i class="fs-4 text-red fa-solid fa-trash"></i>
                  </div>
                </button>
        `;
}

