function getNumber(num){
    
    var answer = document.getElementById("result");
    answer.value += num;

}


function clearBtn(){
    var answer = document.getElementById("result");
    answer.value = "";
}


function getResult(){
    var answer = document.getElementById("result");
    answer.value = eval(answer.value);
   
}