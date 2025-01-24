//step1: where to add
const placeList = document.getElementById('tour-places')
//2.What to  be added
const li = document.createElement('li')
li.innerText = "pahartolibon"
//3. append/add the child
placeList.appendChild(li)

//adding a section

const mainContainer = document.getElementById('main-content')

const sections = document.createElement('section');

const  h1 = document.createElement('h1')
h1.innerText = 'Food List';
sections.appendChild(h1);

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'biriany'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'polau'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'borhani'
ul.appendChild(li3)

const li4 = document.createElement('li')
li4.innerText = 'kabab'
ul.appendChild(li4)

sections.appendChild(ul)

mainContainer.appendChild(sections)

//set inner html directly
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
 <h1> My dress list</h1>
 <ul>
    <li>Shirt</li>
    <li>pant</li>
    <li>jainga</li>
</ul>
`
mainContainer.appendChild(sectionDress);