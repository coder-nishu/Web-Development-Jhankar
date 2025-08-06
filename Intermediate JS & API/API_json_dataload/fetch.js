function loadData(){
    console.log("fetch.js loaded");
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

function userData(){
    url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res => res.json())
    .then(data => pasteData(data))
}
function pasteData(userData){
    const ol  = document.getElementById('user-list');
    for(const user of userData)
    {
        const li = document.createElement('li');
        li.innerText = user.name
        ol.appendChild(li)
    }
}