function stopwatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const start = stopwatch();
for(let i = 0; i < 3; i++){
    console.log("start:" + start());
}
const start2 = stopwatch();
for(let i = 0; i < 5; i++){
    console.log("start2:" + start2());
}
console.log("start:" + start());
console.log("start2:" + start2());