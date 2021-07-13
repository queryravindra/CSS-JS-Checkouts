(function(){
    const cartInfo = document.querySelector('#cart-info');
    const cart = document.querySelector('.cart');
    cartInfo.addEventListener('click',(e)=>{
      e.preventDefault();
      cart.classList.toggle('show-cart');
    })
})();

(function(){
    // refactor to get rid of DRY code
    const buttons = document.querySelectorAll('.btn')
    const treasureItems = document.querySelectorAll('.treasure-item')
    buttons.forEach((button)=> {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            treasureItems.forEach((item)=> {
                if (filter === 'all'){
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
})();

//wire up filter search box
(function(){
    const searchBox = document.querySelector('#search-item')
    const treasureItems = document.querySelectorAll('.treasure-item')
    searchBox.addEventListener('keyup', (e) => {
        const searchFilter = e.target.value.toLowerCase().trim()
        //display only items that contain filter input
        treasureItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })
})();

/* highlightbox */
(function(){
    let treasureItems = document.querySelectorAll('.treasure-item');
    let highlightbox = document.querySelector('.highlightbox-container');
    let highlightboxItem = document.querySelector('.highlightbox-item');
    let images = document.querySelectorAll('.treasure-img');
    
    
    let imageList = [];
    let imageCounter = 0;
    images.forEach(function(image){
      imageList.push(image.src);
    })
    
    //Add an a click event listener to each treasure item
    treasureItems.forEach(function(item) {
      item.addEventListener('click', function(e){
      let image = e.target.src;
      highlightboxItem.style.backgroundImage = `url(${image})`;
      //show the modal with the selected image
      highlightbox.classList.add('show');
      imageCounter = imageList.indexOf(image);
      });
    }); 
    
    //wire up the left and right buttons
    //select left button from the DOM
    let btnLeft = document.querySelector('.btnLeft');
    btnLeft.addEventListener('click', function(){
      imageCounter--;
      if (imageCounter < 0){
        imageCounter = imageList.length -1;
      }
      highlightboxItem.style.backgroundImage = `url(${imageList[imageCounter]})`
    });
      //select Right button from the DOM
    let btnRight = document.querySelector('.btnRight');
    btnRight.addEventListener('click', function(){
      imageCounter++;
      if (imageCounter >= imageList.length){
        imageCounter = 0;
      }
      highlightboxItem.style.backgroundImage = `url(${imageList[imageCounter]})`;
    });
    
    //wire up the modal's close button
      let highlightboxClose = document.querySelector('.highlightbox-close');
      highlightboxClose.addEventListener('click', function(){
      highlightbox.classList.remove('show');
      });
  })();
  