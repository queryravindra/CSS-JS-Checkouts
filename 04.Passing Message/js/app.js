(function() {
    const form = document.getElementById('form')
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const message = document.getElementById('message')
        const alert = document.getElementById('alert')
        const messageContent = document.getElementById('message-content')
    
        if (message.value === ''){
            alert.classList.add('show')
            setTimeout(function(){
            alert.classList.remove('show')
            }, 2000)
        } else {
            if(message.value.length<25){
              messageContent.textContent = `👉 ${message.value} 👈`
              messageContent.style.backgroundColor = ''
              messageContent.style.color = ''
              messageContent.style.display = '';
            }else if(message.value.length>24) {
              messageContent.textContent = `👉 <25 charecters 👈`
              messageContent.style.backgroundColor = 'darkred'
              messageContent.style.color = 'white'
              messageContent.style.display = 'inline-block';
            }
            message.value = ''
        }
    })
    })()
    
    