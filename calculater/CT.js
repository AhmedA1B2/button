
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

