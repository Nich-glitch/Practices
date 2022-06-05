
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
   
  let list = document.querySelector(".list");

    function renderTodoItem(title, tf, id) {

    
    let item_element = document.createElement("div");
    item_element.setAttribute("class", "item");
    
    
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", id);
    input.checked = tf;

    let label = document.createElement("label");
    label.setAttribute("for", id)
    label.textContent=title;
    

    
    item_element.appendChild(input); 
    item_element.appendChild(label);
    list.appendChild(item_element);
       
    };

    function renderList(list) {
             
      list.forEach(function (row) {
renderTodoItem(row.todo, row.completed, row.id);
});
}
get_todos().then(function () {
  renderList(todos);
});
      
      

      let links = document.querySelectorAll(".links a");
      
      function filter_completed_todos(list) {
        list.filter(function(item) {
          return item.completed;
        });
        }

      links.forEach(function(link) {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          let element = event.target;
          let id = element.getAttribute("id");

          id.filter(function(id) {
            if (id ==="completed") {
              
              let completed_items = filter_completed_todos(todos);
            renderList(completed_items);
            
            }
           else {
            renderList(todos);
          }
          })
        })
      })

  


    

  




