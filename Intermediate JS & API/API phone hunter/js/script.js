let isClickShowAll = false
const loadPhone = async (searchValue = 'iphone', isClickShowAll) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
        const data = await response.json();
        const phones = data.data;
        console.log(phones)
        displayPhones(phones, isClickShowAll)
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}
loadPhone()
function displayPhones(phones, isClickShowAll) {
    const phoneListContainer = document.getElementById('phoneListContainer');
    phoneListContainer.innerHTML = ''
    const showAllContainer = document.getElementById('ShowAllContainer')
    //show all button hide or unhide
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden')
    } else {
        showAllContainer.classList.add('hidden')
    }
    let phones12 = phones.slice(0, 12);
    if (isClickShowAll) {
        phones12 = phones;
    }

    phones12.forEach(phone => {

        const div = document.createElement('div')
        div.classList = "card bg-base-100 w-96 shadow-sm";
        div.innerHTML =
            `
        <figure>
    <img
      src="${phone.image}"
      alt="Shoes" />
  </figure>
  <div id="${phone["slug"]}" class="card-body">
    <h2 class="card-title">${phone["phone_name"]}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-center">
      <button onclick="showDetailsHandler('${phone.slug}'); my_modal_5.showModal()" class="btn bg-[#0D6EFD] h-[48px] w-[180px] text-white">Show Details</button>
    </div>
        `
        phoneListContainer.appendChild(div)
    });
    toggleSpinner(false)
}

//handle search button
const searchHandler = (isClickShowAll) => {
    const searchField = document.getElementById('input-search');
    const searchvalue = searchField.value;
    toggleSpinner(true)
    loadPhone(searchvalue, isClickShowAll);
}

function toggleSpinner(isToggle) {
    const spinner = document.getElementById('load-spinner')
    if (isToggle) {
        spinner.classList.remove('hidden')
    } else {
        spinner.classList.add('hidden')
    }
}
const toggleButton = (showAll) => !showAll
//show all button handler
const showAllHandler = () => {
    isClickShowAll = toggleButton(isClickShowAll)
    searchHandler(isClickShowAll);
    const showAllButton = document.getElementById('showAll-Btn')
    if (isClickShowAll) {
        showAllButton.innerText = "Show Less"
    } else {
        showAllButton.innerText = "Show More"
    }

}

//handle show details
const showDetailsHandler = async (phone) => {
    toggleSpinner(true)
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${phone}`);
    const data = await response.json();
    const phoneData = data.data;
    console.log(phoneData)

    // Clear previous modal content
    const modalContainer = document.getElementById("modal-container");
    modalContainer.innerHTML = "";

    // Create card HTML with phoneData
    const div = document.createElement('div');
    div.classList = "card bg-base-100 w-96 shadow-sm";
    div.innerHTML = `
        <figure>
            <img src="${phoneData.image}" alt="${phoneData.name}" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phoneData.name}</h2>
            <p><strong>Brand:</strong> ${phoneData.brand}</p>
            <p><strong>Release Date:</strong> ${phoneData.releaseDate || "No release date found"}</p>
            <p><strong>Storage:</strong> ${phoneData.mainFeatures?.storage || "N/A"}</p>
            <p><strong>Display Size:</strong> ${phoneData.mainFeatures?.displaySize || "N/A"}</p>
            <p><strong>Chipset:</strong> ${phoneData.mainFeatures?.chipSet || "N/A"}</p>
            <p><strong>Memory:</strong> ${phoneData.mainFeatures?.memory || "N/A"}</p>
            <p><strong>Sensors:</strong> ${phoneData.mainFeatures?.sensors?.join(', ') || "N/A"}</p>
            <p><strong>Others:</strong></p>
            <ul>
                <li><strong>WLAN:</strong> ${phoneData.others?.WLAN || "N/A"}</li>
                <li><strong>Bluetooth:</strong> ${phoneData.others?.Bluetooth || "N/A"}</li>
                <li><strong>GPS:</strong> ${phoneData.others?.GPS || "N/A"}</li>
                <li><strong>NFC:</strong> ${phoneData.others?.NFC || "N/A"}</li>
                <li><strong>Radio:</strong> ${phoneData.others?.Radio || "N/A"}</li>
                <li><strong>USB:</strong> ${phoneData.others?.USB || "N/A"}</li>
            </ul>
        </div>
    `;
    modalContainer.appendChild(div);
    toggleSpinner(false)
}