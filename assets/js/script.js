let startTime=null;
// global selectors
const form =document.getElementById("form");
const timer =document.getElementById("timer");
const confirmationMessage =document.getElementById("confirmation");


if(form){
    const inputs =form.querySelectorAll("input,textarea");
    // Start timer on first focus
    inputs.forEach((input)=>{
        input.addEventListener("focus",()=>{
            if(!startTime){
                startTime= new Date().getTime();
            }
        })
    });
    // on form submit 
    form.addEventListener("submit",function(e){
        e.preventDefault();

        // Show confirmation message 
        confirmationMessage.classList.remove("hidden");
        confirmationMessage.style.display ="block";
        confirmationMessage.style.color= "green";
        // Time spent calculation
        if(startTime){
            const endTime = new Date().getTime();
            const timeSpent= Math.floor((endTime-startTime)/1000);
            timer.textContent= `Time spend filling the form:${timeSpent} seconds `
        }
        // clear form inputs 
         form.reset();
         startTime=null;
    })
}

// Star rating functionality
const rating= document.querySelectorAll('.stars input[type="radio"]');

rating.forEach((input)=>{
    input.addEventListener('change',()=>{
        const value =input.id.replace("star","");
        alert(`You rated us ${value} star${value>1 ? 's':""}`)
    })
})


// Page-2:Sortable list 
function sortNames(){
    const ul=document.getElementById("names");

    if(!ul) return;

    const itemArray= Array.from(ul.getElementsByTagName("li"));
    const sortedItems = itemArray.map(li=>li.textContent).sort((a,b)=>a.localeCompare(b))
    ul.textContent="";
    sortedItems.forEach(name=>{
        const li= document.createElement("li");
        li.textContent=name;
        ul.appendChild(li);
    })
}

