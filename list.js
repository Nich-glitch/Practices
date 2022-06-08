let todos = [];  
  
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
    let result = list.filter(function(item) {
      return item.completed;
    });
    return result;
    }
   
  let list = document.querySelector(".list");

  function reset_list() {
    list.innerHTML = "";
  }  
  
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
      reset_list();
             
      list.forEach(function (row) {
renderTodoItem(row.todo, row.completed, row.id);
});
}
get_todos().then(function () {
  renderList(todos);
});
      
      

      let links = document.querySelectorAll(".links a");
      

      links.forEach(function(link) {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          let element = event.target;
          let id = element.getAttribute("id");

          
            if (id ==="completed") {
              
              let completed_items = filter_completed_todos(todos);
            renderList(completed_items);
            
            }
           else {
            renderList(todos);
          }
          });
        });
      

  


    

  




