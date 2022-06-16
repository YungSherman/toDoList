let addToDoButton = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer"); // ovo je <ul></ul> dje dodajemo li
let inputField = document.getElementById("inputField");
let filter = document.getElementById("filter");
let delAllBtn = document.getElementById("delAllBtn");


addToDoButton.addEventListener("click", function(){

  let listItem = document.createElement('li');
  let text = document.createElement("p");
  if (inputField.value === ""){
    alert("empty");
    return;
    } else {
      text.innerText = inputField.value; //paragaphu dodajemo text iz inputFielda
    }
  
  
  listItem.classList.add("paragraph-style");
  text.classList.add("text");

  container.appendChild(listItem);
  listItem.appendChild(text);
  inputField.value = ""; //kad dodamo nesto input field postaje empty
  let delBtn = document.createElement("button");
  delBtn.classList.add("btn-delete");
  delBtn.innerText = "x";
  listItem.append(delBtn);
  delBtn.addEventListener("click", function(e) {
    e.target = listItem.remove();
    e.target = delBtn.remove()
  })
})

inputField.addEventListener("keyup", (e) => {
  if (e.which === 13) {
    

  let listItem = document.createElement('li');
  let text = document.createElement("p");
  
  if (inputField.value === ""){
    alert("empty");
    return;
    } else {
      text.innerText = inputField.value; //paragaphu dodajemo text iz inputFielda
    }

  listItem.classList.add("paragraph-style");
  text.classList.add("text")
  container.appendChild(listItem);
  listItem.appendChild(text);
  inputField.value = ""; //kad dodamo nesto input field postaje empty
  let delBtn = document.createElement("button");
  delBtn.classList.add("btn-delete");
  delBtn.innerText = "x";
  listItem.append(delBtn);
  delBtn.addEventListener("click", function(e) {
    e.target = listItem.remove();
    e.target = delBtn.remove();
  })
}
})

filter.addEventListener("keyup", function() {
  
  let filterValue = document.getElementById("filter").value.toLowerCase(); //takes value that is in input field
  document.querySelectorAll(".paragraph-style").forEach(function(task) {
    let item = task.firstChild.textContent.toLowerCase();
    if(item.indexOf(filterValue) > -1) {
      task.style.display = "";
     } else {
      task.style.display = "none";
     };
    
  })
});

 delAllBtn.addEventListener("click", function(e) {
   e.target = container.textContent = "";
 })