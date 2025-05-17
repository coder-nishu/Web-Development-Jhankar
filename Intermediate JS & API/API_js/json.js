
//JSON.stringify //that converts a JavaScript object into a JSON string
//JSON.parse //that parses a JSON string and constructs the JavaScript value or object described by the string
const user = {
    id: 1,
    name: "John Doe",
    job: "Software Engineer",
}
const stringify = JSON.stringify(user);
console.log(stringify); // {"id":1,"name":"John Doe","job":"Software Engineer"}
const parse = JSON.parse(stringify);
console.log(parse); // { id: 1, name: 'John Doe', job: 'Software Engineer' } 