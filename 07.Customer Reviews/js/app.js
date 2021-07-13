(function(){
    // variables
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerReview = document.querySelector('#customer-review')
    const buttons = document.querySelectorAll('.btn')
    const quoteIcon = document.querySelector('.quote-icon')
    const reviewIcons = document.querySelector('.review-icons')
    let index = 0
    const customers = []

    //Create a new customer using a customer constructor
    
    //Customer Constructor
    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    //Create new customer using the constructor function

    function createCustomer(img, name, text) {

        let fullImg = `./img/customer-${img}.jpg`
        let customer = new Customer(fullImg, name, text)

        customers.push(customer)
    }

    //customers data
    createCustomer(0, 'Fernandes', 'Not upto that level.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1, 'Zack', 'Not upto that level.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2, 'David', 'some features are upto level.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Jhonny', 'Its amazing.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4, 'Autrino', 'some features are upto level.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    createCustomer(5, 'Smith', 'Its all about next lavel generation.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    createCustomer(6, 'Elvina', 'Its amazing.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    createCustomer(7, 'Mary', 'Not upto that level.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    createCustomer(8, 'Naurito', 'some features are upto level.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    createCustomer(9, 'Palrido', 'Its amazing.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    
    // actions on document
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
               if(index === 0){
                    index = customers.length
               }
               index--
               customerImage.src = customers[index].img
               customerName.textContent = customers[index].name
               customerReview.textContent = customers[index].text
               if(index==3||index==6||index==9){
                    reviewIcons.innerHTML = `
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star-half"></i>
                                                </span>
                                            `
                    quoteIcon.innerHTML = `<i class="fas fa-grin-stars"></i>`
               }
               else if(index==2||index==4||index==8){
                    reviewIcons.innerHTML = `
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            `
                    quoteIcon.innerHTML = `<i class="fas fa-grin-alt"></i>`
               }
               else if(index==0||index==1||index==7){
                    reviewIcons.innerHTML = `
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star-half"></i>
                                                </span>
                                            `
                    quoteIcon.innerHTML = `<i class="fas fa-angry"></i>`
               }
               else {
                    reviewIcons.innerHTML = `
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            `
                    quoteIcon.innerHTML = `<i class="fas fa-grin-hearts"></i>`
               }
            }
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                     index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerReview.textContent = customers[index].text
                if(index==3||index==6||index==9){
                    reviewIcons.innerHTML = `
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star-half"></i>
                                                </span>
                                            `
                    quoteIcon.innerHTML = `<i class="fas fa-grin-stars"></i>`
               }
               else if(index==2||index==4||index==8){
                    reviewIcons.innerHTML = `
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            `
                    quoteIcon.innerHTML = `<i class="fas fa-grin-alt"></i>`
               }
               else if(index==0||index==1||index==7){
                    reviewIcons.innerHTML = `
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star-half"></i>
                                                </span>
                                            `
                    quoteIcon.innerHTML = `<i class="fas fa-angry"></i>`
               }
               else {
                    reviewIcons.innerHTML = `
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                                <span class="star-icon">
                                                    <i class="fas fa-star"></i>
                                                </span>
                                            `
                    quoteIcon.innerHTML = `<i class="fas fa-grin-hearts"></i>`
               }
             }
        })
    })
    
})()