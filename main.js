let parent = document.querySelector(".parent");
let allSpans = document.querySelectorAll(".buttons span");
let input = document.querySelector("#the-input");
let result = document.querySelector(".results >span");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    } else if (e.target.classList.contains("add-item")) {
      addItem();
    } else if (e.target.classList.contains("delete-item")) {
      deleteItem();
    } else if (e.target.classList.contains("show-item")) {
      showItem();
    }
  });
});

function checkItem() {
    if (input.value === "") {
    checkEmptyInput();}
    else
  if (localStorage.getItem(input.value)) {
    result.innerHTML = `Item <span>${input.value}</span> exists in localStorage `;
  } else {
    result.innerHTML = `Item <span>${input.value}</span> does not exist in localStorage  `;
  }}

  function addItem() {
    if (input.value === "") {
      checkEmptyInput();
    } else {
      localStorage.setItem(input.value, input.value);
      result.innerHTML = `Item <span>${input.value}</span> added to localStorage`;
      input.value = "";
    }
}

  function deleteItem() {
     if (input.value === "") {
      checkEmptyInput();
    } else 
      if(localStorage.getItem(input.value)){
      localStorage.removeItem(input.value);
      result.innerHTML = `Item <span>${input.value}</span> is deleted from localStorage`;
      input.value = "";}
      else {
      result.innerHTML = `Item <span>${input.value}</span> does not exist in localStorage`;
      }
  }

  // function showItem() {
  //   if (localStorage.length === 0) {
  //     result.innerHTML = "LocalStorage is empty";
  //   } else {
  //     let items = "";
  //     for (let i = 0; i < localStorage.length; i++) {
  //       items += ` <span class="keys">${localStorage.key(i)}</span>  `;
  //     }
  //     result.innerHTML = `Items in LocalStorage: ${items} `;
  //   }}


function showItem(){
  if(localStorage.length){
result.innerHTML="";
for(let[key, value] of Object.entries(localStorage)){
    result.innerHTML += `<span class="keys">${key}</span> `;
  }
  }
  else {
    result.innerHTML = "LocalStorage is empty";
  }
}





  function checkEmptyInput() {
    if (input.value === "") 
      result.innerHTML = "Input cannot be empty";
}
