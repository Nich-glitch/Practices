

let posts = document.querySelector(".posts");

function renderpost (post) {
    let container = document.createElement ("div");
    container.classList.add ("post");

    let title = document.createElement ("h2");
    title.textContent = post.title;

    let paragraph = document.createElement ("p");
    paragraph.textContent = post.body;

    posts.appendChild(container);
    container.appendChild(title);
    container.appendChild(paragraph);
    

}

fetch("https://jsonplaceholder.typicode.com/posts/3")
.then (function(response) {
    return response.json();
})

.then(function (response) {
    renderpost(response);
});


