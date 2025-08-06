function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            displayPost(data);
        });
}

function displayPost(data){
    const postContainer = document.getElementById('post-container')
    for(const user of data)
    {
        const div = document.createElement('div')
        div.innerHTML = 
        `
        <h3>User id: ${user.id} </h3>
        <h4>Post Title: ${user.title}</h5>
        <h5>post: ${user.body}</h5>
        ` 
        postContainer.appendChild(div);
    }
}
loadPost();