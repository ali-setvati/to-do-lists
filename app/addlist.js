const addlistBox = document.getElementById("addlistBox");
const addbox = document.createElement("div");
addbox.classList.add("seccontainer");
addlistBox.appendChild(addbox);
const addBtn = document.createElement("button");
addBtn.innerText = "Add Task";
addBtn.id = "addBtn";
addbox.appendChild(addBtn);
const addinput = document.createElement("input");
addbox.appendChild(addinput);
addinput.classList.add("addinput");

addBtn.addEventListener("click", function (e) {
  const addform = document.createElement("form");
  addform.classList.add("addform");
  addlistBox.appendChild(addform);
  //   console.log(addinput.value);

  const addtr = document.createElement("tr");
  addtr.classList.add("addtr");
  addform.appendChild(addtr);

  const btnTd = document.createElement("td");
  btnTd.classList.add("btnTd");

  const textTd = document.createElement("td");
  textTd.classList.add("textTd");
  textTd.innerText = addinput.value;
  

  addtr.appendChild(btnTd);
  addtr.appendChild(textTd);

  //   addli.innerText = addinput.value;
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  delBtn.classList.add("delBtn");
  editBtn.innerText = "Edit";
  delBtn.innerText = "Delete";
  btnTd.appendChild(delBtn);
  btnTd.appendChild(editBtn);
});
