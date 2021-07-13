// variables
const form = document.querySelector('#form');
const item = document.querySelector('#item');
const todo = document.querySelector('.todo');
const edit = document.querySelector('.edit');
const submit = document.querySelector('#AddToDo');
const heading = document.querySelector('#heading');
const rect = document.querySelector('#rect');
const mytodos = document.querySelector('.my-todos');
const buttons = document.querySelector('.buttons');
const clear = document.querySelector('#clear');
const clearSelected = document.querySelector('#clearSelected');


var myToDos=[];

// handlingActions (edit,checking,deletion)
const handlingAction = function(singleItem){
    const tr = mytodos.querySelectorAll('.todo');

    tr.forEach(function(i){
        var c = i.children;
        const name = c[0].querySelector('.todoName');
        if(name.textContent == singleItem){
            // check action
            name.querySelector('.check').addEventListener('click',()=>{
                    if(name.style.textDecoration == 'line-through'){
                        name.style.textDecoration = 'none';
                        name.style.opacity = 1;
                        name.querySelector('.check').style.color = 'green';
                    }else{
                        name.style.textDecoration = 'line-through';
                        name.style.opacity = 0.5;
                        name.querySelector('.check').style.color = '#777';
                    }
            })
            
            // edit action
            c[1].querySelector('.edit').addEventListener('click', function(){
                editSound();
                item.value = singleItem;
                mytodos.removeChild(i);

                myToDos = myToDos.filter(function(i){
                    return i !== singleItem;
                });

                if(myToDos.length==0){
                    heading.classList.add('display');
                    buttons.classList.add('display');
                }

                if(myToDos.length == 1){
                    buttons.classList.add('display');
                }

            });

            // delete action
            c[2].querySelector('.delete').addEventListener('click', function(){
                mytodos.removeChild(i);

                myToDos = myToDos.filter(function(i){
                        return i !== singleItem;
                });

                var key = localStorage.getItem(localStorage.key(0));
                var objKey = JSON.parse(key)
                objKey = objKey.filter(function(k){
                    return k!==name.textContent;
                })
                localStorage.setItem("myToDos",JSON.stringify(objKey));

                if(myToDos.length==0){
                    heading.classList.add('display');
                    buttons.classList.add('display');
                }

                if(myToDos.length == 1){
                    buttons.classList.add('display');
                }
                // showFeedback('item delete', 'success');
            })
        }
    })

    if(myToDos.length == 1){
        buttons.classList.add('display');
    }
}

// setting up localStorage
const settingLocalStorage = (myToDos) => localStorage.setItem('myToDos', JSON.stringify(myToDos));

//Adding myToDos to my-todos
const addingToDos = function(myToDos){
    mytodos.innerHTML='';

    var colors = ['table-active','table-primary','table-secondary','table-success','table-danger','table-warning','table-info']

    myToDos.forEach(function(i){
        var ranNum = Math.floor(Math.random() * colors.length); 
        buttons.classList.remove('display');
        heading.classList.remove('display');
        mytodos.insertAdjacentHTML('beforeend',
            `
                <tr class="todo ${colors[ranNum]} col-12">
                    <td class="text-left col-8"><h6 class="todoName"><i style="cursor:pointer;color:green;" class="fa fa-check-circle mr-2 check"></i>${i}</h6></td>
                    <td class="text-right"><i style="cursor:pointer; color:peru;" class="fa fa-edit edit" onclick="editSound()"></i></td>
                    <td class="text-right"><i style="cursor:pointer;color:red;" class="fa fa-trash delete" onclick="deleteSound()"></i></td>
                </tr>
            `
        );
        handlingAction(i);
    });
}

// getting items from localStorage
const gettingItems = () => {
    if(localStorage.getItem('myToDos')=='null'||localStorage.getItem('myToDos')==undefined){
        myToDos = [];
        buttons.classList.add('display');
        heading.classList.add('display');
    }else {
        var myToDos = JSON.parse(localStorage.getItem('myToDos'));
        addingToDos(myToDos);
    }
}
gettingItems();




// on submitting the form
form.addEventListener('submit',function(e){
    e.preventDefault();
    const itemName = item.value;

    if(itemName){
        buttons.classList.remove('display');
        heading.classList.remove('display');
        if (myToDos.includes(itemName) === false){
            myToDos.push(itemName);
    
            settingLocalStorage(myToDos);

            addingToDos(myToDos);
        }else{
            alert("You have entered the same item as earlier..")
        }
        
    }else{
        alert("Message from queryravindra!\nPlease enter a todo item...");
    }

    item.value="";
})

// clear evrything from mytodos and localStorage
clear.addEventListener('click', function(){
    deleteSound();
    myToDos = [];
    localStorage.clear();
    buttons.classList.add('display');
    heading.classList.add('display');
    addingToDos(myToDos);
})


// deleting selected
clearSelected.addEventListener('click',function(){
    const tr = mytodos.querySelectorAll('tr');

        tr.forEach(function(i){
            if(i.querySelectorAll('td')[0].querySelector('h6').style.textDecoration=='line-through'){
                var text = i.querySelectorAll('td')[0].querySelector('h6').textContent
    
                // removing item from display(mytodos)
                mytodos.removeChild(i);
    
                // removing item from myToDos
                myToDos = myToDos.filter(j=>{
                    return j!=text;
                })
    
                var key = localStorage.getItem(localStorage.key(0));
                var objKey = JSON.parse(key)
                objKey = objKey.filter(function(k){
                    return k!==text;
                })
                localStorage.setItem("myToDos",JSON.stringify(objKey));

                if(myToDos.length == 0){
                    heading.classList.add('display');
                    buttons.classList.add('display');
                }
                
                if(myToDos.length == 1){
                    buttons.classList.add('display');
                }
            }
        })
        
        // if(tr.length == 0){
        //     buttons.classList.add('display');
        // }
    
})


// delete sound
function deleteSound() {
    var audio = document.getElementById("audio1");
    audio.play();
}

//edit sound 
function editSound() {
    var audio = document.getElementById("audio2");
    audio.play();
}
