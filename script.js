var addBtn=document.getElementById('add-btn');
var input=document.getElementById('input');
var ul=document.getElementById('unordered-list');
var noOfTask=document.getElementById("count");
var count=0;

// to display the no of items in list at the footer
function itemsCount(){
    noOfTask.innerHTML="<b>"+count+"</b>"+ " tasks left";
}


//adds item to the list when the user clicks on add button
function addItem(){
    if(input.value!="") {
      var li=document.createElement('li');
      var element=ul.appendChild(li);
      // on clicking icon remove the current item by sending its reference using this to the removeItem()
      element.innerHTML = input.value + "<i  onclick='removeItem(this)' class='far fa-times-circle'></i>";
      input.value="";
      count++;
      itemsCount();
      enable();
    }
}

//removes the current item by first finding the parentNode
function removeItem(elem){
    //elem contain icon only, to get full li item use parentNode on elem
    var item = elem.parentNode; 
    //get ul then remove li
    item.parentNode.removeChild(item);
    count--;
    itemsCount();
    enable();
}

//function for disabling and enabling add button if field value is set or not respectively
function enable()
{
     if(input.value!=""){
        addBtn.removeAttribute("disabled");
     }
     else{
        addBtn.setAttribute("disabled", null);
     }
}

// on click of Add Item button invoke addItem()
addBtn.addEventListener('click',addItem);
input.addEventListener('keyup',enable);
