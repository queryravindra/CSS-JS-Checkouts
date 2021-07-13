(function(){
  // considering two buttons
  var buttons = document.querySelectorAll('button');
  
  // counter part
  var h1 = document.getElementById('counter');
  
  // initiating counter with 0
  let count = 0;
  
  buttons.forEach( button => {
    button.addEventListener('click',()=>{
      if(button.classList.contains('dec-btn')){
          count--;
       }
      else if(button.classList.contains('inc-btn')){
          count++;
      }
      
      // changing inner text of counter
      h1.textContent = count;
      
      
      // adding color specificity to counter
      if(count<0){
        h1.style.color = 'red'
      } else if (count>0){
        h1.style.color = 'green'
      } else {
        h1.style.color = '#fa26a0'
      }
      
      
    })
  })
})();