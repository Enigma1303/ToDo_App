const input=document.getElementById("input")
const addbutton=document.getElementById("add")
const todolist=document.getElementById("todolist")
 

addbutton.addEventListener('click',addtask);


function addtask(event) {
    event.preventDefault();
    const inputvalue=document.getElementById("input").value


const todobox=document.createElement('div')
todobox.classList.add('listbox');
todobox.id = 'listbox';


const listitem=document.createElement('li')
listitem.innerHTML=inputvalue;
listitem.classList.add('listitem');
listitem.id = 'listitem';
todobox.appendChild(listitem);


//done button
const donebutton=document.createElement('button')
donebutton.classList.add('done');
donebutton.innerHTML='<i class="fas fa-check"> </i>';
donebutton.id = 'done';
donebutton.addEventListener('click',deletetodo);
todobox.appendChild(donebutton);

//finished button

const finishedbutton = document.createElement('button');
      finishedbutton.classList.add('finished');
      finishedbutton.innerHTML = '<i class="fas fa-trash"></i>';
      finishedbutton.addEventListener('click', deletetodo);
      todobox.appendChild(finishedbutton);

      todolist.appendChild(todobox);
      document.getElementById("input").value = "";
    }

    function deletetodo() {
      var todobox = this.parentNode;
      todobox.classList.add('deleteanimation')
      setTimeout(()=>{
        var todolist = todobox.parentNode;
        todolist.removeChild(todobox);
      },500)
    
    }