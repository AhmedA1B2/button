let plus = document.getElementById('plus');
let calculato = document.querySelector('#calculator');
let contact = document.getElementById('contact');
let theme = document.getElementById('theme');
let calc = document.getElementById('calc');
let themeb = document.getElementById('themeb');
let sM =document.getElementById('Sma');
let VARNote = document.getElementById('Note');
let p = 0;
let c = 0;
let t = 0;
let s = 0;
let n = 0;

function getplus(){


    if(p==0){
    plus.style.transform = 'rotate(135deg)';
    plus.style.background = 'aliceblue';
    plus.style.color = '#01076d';
    plus.style.width = '45px';
    plus.style.height = '45px'; 

     p=1
     calculato.classList.remove('hide');
     contact.classList.remove('hide');
     theme.classList.remove('hide');
     VARNote.classList.remove('hide');
    }

    else{
        
        plus.style.transform = 'rotate(0deg)';
        plus.style.width= '40px';
        plus.style.height= '40px';
        plus.style.background= '#01076d';
        plus.style.color= 'aliceblue';
     
        p=0
        calculato.classList.add('hide');
        contact.classList.add('hide');
        theme.classList.add('hide');
        sM.classList.add('hide');
        VARNote.classList.add('hide');
    }

}

//cal
function oncal(){
    if(c==0){
calc.classList.remove('hide');
sM.classList.add('hide');
nsby.classList.add('hide')
c = 1;}
else{
    calc.classList.add('hide');
    c = 0; 
}
}

//theme
function themebody(){
    if(t==0){
    themeb.style.background = '#fff';
    t = 1;}
    else {
        themeb.style.background = '#444';
        t = 0; 
    }
}

//i
function SM1(){
    if(s==0){
        sM.classList.remove('hide');
        calc.classList.add('hide');
        nsby.classList.add('hide')
        s = 1;}
        else{
            sM.classList.add('hide');
            s = 0; 
        }
}







//calculater


function insert(num){
    let my = document.form.text.value;
    let last = my[my.length - 1];
    if(my.length < 23){
        if(!isNaN(last) || last == null || !isNaN(num)){
            document.form.text.value = my + num;
        }else if(num != last){
    document.form.text.value = my.replace(last, num);
        }
    }
    }
    
    function  eq(){
        let sum = document.form.text.value;
        if(sum){
            document.form.text.value = eval(sum);
        }
    }
    
    function clean(){
        document.form.text.value = '';
    }
    
    function back(){
        let exp = document.form.text.value ;
        document.form.text.value = exp.substring(0,exp.length - 1);
    }
    
    
 //Notes

const notes = document.querySelector(".Notes");
const createNotes = document.querySelector(".btnN");
let Notes = document.querySelectorAll(".inputNBox");
let nsby = document.getElementById('nsby')

function SN(){
if(n == 0){
nsby.classList.remove('hide');
calc.classList.add('hide');
sM.classList.add('hide');
n=1;
}else{
    nsby.classList.add('hide');
    n=0;
}
}

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