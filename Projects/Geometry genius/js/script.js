function calculateTriangle(){
    const baseValue = document.getElementById('baseinput').value;
    const heightValue = document.getElementById('heightinput').value;
    const areaValue = parseFloat(0.5 * baseValue * heightValue);
    console.log(baseValue, heightValue,areaValue,typeof areaValue);
}
function calculateRectangle(){
    const widthValue = document.getElementById('rec-width').value;
    const lengthValue = document.getElementById('rec-length').value;
    const areaValue = parseFloat(widthValue * lengthValue);
    console.log(widthValue, lengthValue,areaValue,typeof areaValue);
}

//another option by using a common function to get the input values

function getInputvalueById(inputFieldId){
    const inputValue = document.getElementById(inputFieldId);
    return inputValue;
} //this function will collect input value by id paramete

function calculateParallelogram(){
    const baseValue = getInputvalueById('parallelogram-base').value;
    const heightValue = getInputvalueById('parallelogram-height').value;
    const areaValue = parseFloat(baseValue*heightValue);
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = areaValue ;
    document.getElementById('parallelogram-area-para').style.display = "block"
}
function calculateRhombus(){
    const d1 = getInputvalueById('rhombus-d1').value;
    const d2 = getInputvalueById('rhombus-d2').value;
    const areaValue = parseFloat(0.5*d1*d2);
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = areaValue ;
    document.getElementById('rhombus-area-para').style.display = "block";
}
