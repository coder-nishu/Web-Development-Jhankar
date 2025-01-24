//option 1: directly set on html

//option 2
function make_yellow()
{
    document.body.style.backgroundColor = 'yellow';
}
function make_violet()
{
    document.body.style.backgroundColor = 'violet';
}

//option 3
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function make_purple()
{
    document.body.style.backgroundColor = 'purple';
}
//option-4
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click',make_pink )

function make_pink()
{
    document.body.style.backgroundColor = 'pink';
}
