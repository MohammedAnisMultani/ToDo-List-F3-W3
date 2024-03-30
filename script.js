const names = document.getElementById(`taskName`)
const date = document.getElementById(`date`)
const priority = document.getElementById(`dropdown`)
const btn = document.getElementById("btn")
let currentDate = document.getElementById("current")
let futureDate = document.getElementById("future")
let completed = document.getElementById("completed")
let inputPriority;
const todayDate = new Date().toISOString().split("T")[0];

priority.addEventListener("change",(e)=>{
inputPriority = e.target.value

   
})
btn.addEventListener("click", (e)=>{
    let arr = JSON.parse(localStorage.getItem("taskDetails")) || []

    let inputName = names.value
    let inputDate = date.value
   
  
         arr.push({name:inputName, date:inputDate, priority:inputPriority, completed:false})

         localStorage.setItem("taskDetails",JSON.stringify(arr))


   if(inputDate == todayDate){
    let element1 = `
    <div class="container">
            <p>${inputName}</p>
            <p>${inputDate}</p>
            <p>Priority : ${inputPriority}</p>
            <span>
            <img class="icon1" src="check-mark.png" alt="">
            <img class="icon2" src="delete.png" alt="">
            </span>
        </div>
    `
    currentDate.insertAdjacentHTML("beforeend",element1)
   }
   else if(inputDate < todayDate){
    let element3 = `
    <div class="container completed red">
    <p>${inputName}</p>
    <p>${inputDate}</p>
    <p>Priority : ${inputPriority}</p>
    <span>
    <img class="icon1" src="check-mark.png" alt="">
    <img class="icon2" src="delete.png" alt="">
    </span>
</div>
    `
    completed.insertAdjacentHTML("beforeend",element3)
   }
   else{
    let element2 = `
    <div class="container">
    <p>${inputName}</p>
    <p>${inputDate}</p>
    <p>Priority : ${inputPriority}</p>
    <span>
    <img class="icon1" src="check-mark.png" alt="">
    <img class="icon2" src="delete.png" alt="">
    </span>
</div>
    `
    futureDate.insertAdjacentHTML("beforeend",element2)
   }

})

//adding containers to complete task section
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("icon1")) {
        // Handle click on tick (check-mark) icon
        let container = event.target.closest(".container");
        container.classList.add("completed")
        // container.classList.add("completed"); // Add completed class to the container
        completed.appendChild(container);
    }
});

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("icon2")){
      let content = e.target.closest(".container")

        content.remove()
    }
})



