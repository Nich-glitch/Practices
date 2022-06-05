let todos = [];

/* Data Functions*/
function get_todos() {
  return fetch("https://dummyjson.com/todos")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      todos = data.todos;
      return data;
    });
}

function filter_completed_todos(list) {
  let result = list.filter(function (item) {
    return item.completed;
  });

  return result;
}

// DOM & Render Functions
let list_container = document.querySelector(".list");

function reset_list() {
  list_container.innerHTML = "";
}

function renderTodoItem(title, checked, num) {
  let id = "ch" + num;

  let item_element = document.createElement("div");
  item_element.classList.add("item");

  let input_element = document.createElement("input");
  input_element.setAttribute("type", "checkbox");
  input_element.setAttribute("id", id);
  input_element.checked = checked;

  let label_element = document.createElement("label");
  label_element.setAttribute("for", id);
  label_element.textContent = title;

  item_element.appendChild(input_element);
  item_element.appendChild(label_element);

  //
  list_container.appendChild(item_element);
}

function renderList(list) {
  reset_list();

  list.forEach(function (item, index) {
    renderTodoItem(item.todo, item.completed, index);
  });
}

// Run

// Get the data for first time
get_todos().then(function () {
  renderList(todos);
});

// // Filter data based on user's filter
let tabs = document.querySelectorAll(".filters a");

tabs.forEach(function (tab_item) {
  //   Detecting click
  tab_item.addEventListener("click", function (event) {
    event.preventDefault();
    let element = event.target;
    let id = element.getAttribute("id");

    if (id === "completed") {
      let completed_items = filter_completed_todos(todos);
      renderList(completed_items);
    } else {
      renderList(todos);
    }
  });
});

// // Refresh
// let refresh_button = document.querySelector("button");

// refresh_button.addEventListener("click", function () {
//   get_todos().then(function () {
//     renderList(todos);
//   });
// });
