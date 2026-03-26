// toboo List Form
const toboolistForm = document.querySelector(".toboolistForm");
const nome = "non sirio";
let sum = 0;
for (let i = 0; i < 10; i++) {
  console.log("ciao");

  giovanni(2, 3);

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  sum = i + 2;

  console.log(sum);
}

function giovanni(a, b) {
  forseSilvio("Piersilvio");
  return a + b;
}

function forseSilvio(a) {
  return "pronto: " + a;
}

/* Non Live
// const tobooItems = document.querySelectorAll('.list-group-item');
// console.log(tobooItems)
// Live
// const tobooItemsLive = document.getElementsByClassName('list-group-item');
// console.log(tobooItemsLive) */

toboolistForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const toboolistTask = toboolistForm.querySelector(".toboolistTask"); // Input Task
  const tobooItemsList = document.querySelector(".tobooItems"); // List

  // Creao il to do
  const liElement = createTodo(toboolistTask, tobooItemsList);

  // Funzione per completare
  completeTodo(liElement);

  // Funzione per elimanare
  deleteTodo(liElement);
});

/**
 * Create a todo and retun the DOM element
 * @param {Element} toboolistTask
 * @param {Element} tobooItemsList
 * @returns {Element} The todo item
 */
function createTodo(toboolistTask, tobooItemsList) {
  // const tobooTask = toboolistTask.value.replace(/[^a-z0-9áéíóúñü /:\.,_-]/gim, "");
  const tobooTask = toboolistTask.value;

  // Creo: <li></li>
  const liElement = document.createElement("li");
  const classLists =
    "list-group-item list-group-item-action d-flex justify-content-between";
  liElement.classList.add(...classLists.split(" "));
  liElement.innerText = tobooTask;
  liElement.innerHTML +=
    '<span href="" class="tobooItemDelete bg-danger p-2">Elimina</span>';
  tobooItemsList.append(liElement);

  return liElement;
}

/**
 * Complete a todo by adding a class line-trough
 * @param {Element} liElement
 * @returns {Boolean}
 */
function completeTodo(liElement) {
  liElement.addEventListener("click", function (e) {
    e.preventDefault();

    liElement.classList.toggle("text-decoration-line-through");
  });

  return true;
}

/**
 * Delete To Do
 * @param {Element} liElement
 * @returns {Boolean}
 */
function deleteTodo(liElement) {
  // Logica per eliminare
  const tobooItemDelete = liElement.querySelector(".tobooItemDelete");

  tobooItemDelete.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);

    liElement.remove();
  });

  return true;
}
