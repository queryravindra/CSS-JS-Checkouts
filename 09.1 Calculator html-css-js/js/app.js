// variables

var display = document.getElementById('display');
var buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    if(button.classList.contains('num')||button.classList.contains('opr')){
      button.addEventListener('click',function(){
          display.value +=button.textContent;
      })
    }
  
    if(button.classList.contains('mul')){
      button.addEventListener('click',function(){
        display.value +=button.value;
      })
    }
  
    if(button.classList.contains('ac')){
      button.addEventListener('click',function(){
        if(display.value=="0"){
          display.value=""
        }else{
          display.value=""
        }
      })
    }
  
    if(button.classList.contains('equal')){
      button.addEventListener('click',function(){
        var result=display.value;
        if(result){
          display.value = eval(result);
        }
      })
    }
  
    if(button.classList.contains('backspace')){
      button.addEventListener('click',function(){
        var result=display.value;
        display.value = result.slice(0, -1);
      })
    }
})

