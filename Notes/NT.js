const notes = document.querySelector(".Notes");
const createNotes = document.querySelector(".btn");
let Notes = document.querySelectorAll(".inputNBox");

function sowNotes(){
    notes.innerHTML = localStorage.getItem("notes")
}

sowNotes();

function updateStorage(){
localStorage.setItem("notes", notes.innerHTML);
}

//createNotes

createNotes.addEventListener("click", ()=>{
    let inputNBox = document.createElement("p");
    let img = document.createElement("img");
    inputNBox.className = "inputNBox";
    inputNBox.setAttribute("contenteditable", "true");
    img.src = "Delete.png";
    notes.appendChild(inputNBox).appendChild(img);
});

//deleteNotes

notes.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        Notes = document.querySelectorAll(".inputNBox");
        Notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
        
    }
})