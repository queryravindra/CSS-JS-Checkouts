// immediate invoked function expression

(function() {
  const images = ["img-0","img-1","img-2","img-3","img-4","img-5","img-6","img-7","img-8"];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll('.btn')
  const imageDIV = document.querySelector('.img-container')
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        counter--
        if(counter < 0){
          counter = images.length -1
        }
        imageDIV.style.backgroundImage = `url('./images/${images[counter]}.jpg')`
      }
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > images.length -1){
          counter = 0
        }
        imageDIV.style.backgroundImage = `url('./images/${images[counter]}.jpg')`
      }
    })
  })
})();
