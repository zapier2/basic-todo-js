const newUl = document.createElement("ul");
const form = document.getElementById("taskForm");
const myBtn = document.getElementById("taskBtn");
const input = document.getElementById("input");

newUl.id = "taskList";
form.appendChild(newUl);

let count = 1;
let list = [];
let currentLi = [];
function addTask(event) {
  event.preventDefault();
  let newLi = document.createElement("li");
  if (input.value) {
    list[count - 1] = newLi.textContent = input.value;
    newUl.appendChild(newLi);
    newLi.setAttribute("id", count);
    newLi.setAttribute("class", "task");
    input.value = "";
    count++;
  }
  newLi.addEventListener("click", function () {
    newUl.removeChild(newLi);
  });
}
myBtn.addEventListener("click", addTask);
form.addEventListener("submit", addTask);
