function loadComments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => console.log(data));
}
const loadComments2 = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();
    console.log(data);
    }
    catch(e){
        console.log(e)
    }
}