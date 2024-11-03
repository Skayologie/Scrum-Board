// /******************* Update Function Work Space *********************/

const UpdateBtn = document.getElementById("UpdateTheTask")
const update = function (id){
    document.getElementById("TitlePrompt").innerHTML = "Update Task Number "+id

    let key = "task_"+id
    let localStorageItems = JSON.parse(localStorage.getItem(key))
    poppup.style.display = "flex"
    document.getElementById("UpdateTheTask").classList.remove("d-none")
    document.getElementById("SubmitTheTask").classList.add("d-none")
    document.getElementById("DeleteTheTask").classList.add("d-none")
    UpdateBtn.addEventListener("click",()=>{
    const fields = [
      { id: "exampleInputEmail1", invalidValue: "" },
      { id: "floatingSelect", invalidValue: "Please Select" },
      { id: "floatingSelect2", invalidValue: "Please Select" },
      { id: "Date", invalidValue: "" },
      { id: "floatingTextarea", invalidValue: "" }
    ];
    
    for (const field of fields) {
        if (document.getElementById(field.id).value === field.invalidValue) {
            return;
        }
    }
    const Task = {
        id: id ,
        title:  document.getElementById("exampleInputEmail1").value,
        priority: document.getElementById("floatingSelect").value,
        type: radioSelected,
        status:  document.getElementById("floatingSelect2").value,
        date: document.getElementById("Date").value,
        comment: document.getElementById("floatingTextarea").value
    }
    localStorage.setItem(key, JSON.stringify(Task))

    })
    PoppUpContainer.innerHTML = `
        <form onclick="RadioChecked()" id="PoppupForm" action="./index.html" data-parsley-validate class="gap-4 d-flex flex-column p-4 pt-2">
          
          <div id="PoppUpContainer">
            <div class="mb-3">
              <label for="exampleInputEmail1" aria-autocomplete="both" class="form-label">Title</label>
              <input value=${JSON.stringify(localStorageItems.title)} onchange="DisableAbleSubmitButton('exampleInputEmail1')" data-parsley-minlength="5" data-parsley-minlength-message="You Have To Enter At Least 8 Letters On Title !!" type="text" data-req="Req" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
  
            <div>
              <label for="exampleInputEmail1 " class="form-label ">Type</label>
              <div class="form-check gap-2 d-flex ">
                <input  ${localStorageItems.type === "Feature" ? "checked" : ""}   required class="form-check-input align-self-center" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label onclick="CheckedSelected()"  id="feature"  class="form-check-label" for="flexRadioDefault1">
                  Feature
                </label>
              </div>
              <div>
                <div class="form-check gap-2 d-flex">
                  <input  ${localStorageItems.type === "Bug" ? "checked" : ""}    required class="form-check-input align-self-center" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                  <label id="bug" class="form-check-label" for="flexRadioDefault2">
                    Bug
                  </label>
                </div>
              </div>
            </div>
  
            <div class="form">
              <label for="exampleInputEmail1" class="form-label">Priority</label>
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option disabled selected>Please Select</option>
                <option  ${localStorageItems.priority === "High" ? "selected" : ""} dataSelect="OptionValue"  required value="High">High</option>
                <option  ${localStorageItems.priority === "Medium" ? "selected" : ""} dataSelect="OptionValue"  required value="Medium">Medium</option>
                <option  ${localStorageItems.priority === "Low" ? "selected" : ""} dataSelect="OptionValue"  required value="Low">Low</option>
              </select>
            </div>
            <div class="form">
              <label for="exampleInputEmail1" class="form-label">Status</label>
              <select required class="form-select" id="floatingSelect2" aria-label="Floating label select example">
                <option disabled selected>Please Select</option>
                <option ${localStorageItems.status === "Yet" ? "selected" : ""}  dataSelect="OptionValue" required value="Yet">Not Yet</option>
                <option ${localStorageItems.status === "Doing" ? "selected" : ""} dataSelect="OptionValue" required value="Doing">Doing</option>
                <option ${localStorageItems.status === "Done" ? "selected" : ""} dataSelect="OptionValue" required value="Done">Done</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Date</label>
              <input value=${localStorageItems.date} required type="date" class="form-control" id="Date" aria-describedby="emailHelp">
            </div>
  
            <div id="textareaS" class="form-label">
              <label>Comments</label>
              <textarea  data-req="Req" id="floatingTextarea" data-parsley-minlength="10" data-parsley-minlength-message="You Have To Enter At Least 10 Letters On Comment !!"  required class="form-control" placeholder="Leave a comment here" >${localStorageItems.comment} </textarea>
            </div>
          </div>
        </form>
    `

}