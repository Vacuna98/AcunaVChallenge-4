const pageTitle = document.getElementById("page-title");
const changeTitleBtn = document.getElementById("change-title-btn");
const colorBtn = document.getElementById("change-bg-btn"); // matches HTML
const addCardBtn = document.getElementById("add-card-btn");
const nameInput = document.getElementById("name-box");
const addNameBtn = document.getElementById("add-name-btn");
const lastNameInput = document.getElementById("last-name-box");
const addLastNameBtn = document.getElementById("add-lastname-btn");
const clearAllBtn = document.getElementById("clear-all-btn");
const ageInput = document.getElementById("age");
const ageBtn = document.getElementById("age-btn");


const cardContainer = document.getElementById("card-container");


// Change title button
changeTitleBtn.addEventListener("click", () => {
  if (pageTitle.innerText === "Welcome") {
    pageTitle.innerText = "Bienvenidos";
  } else {
    pageTitle.innerText = "Welcome";
  }
});

// Change background color button
colorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});



function createCard(text) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = text;
    return card;
}

//Name Btn
addNameBtn.addEventListener("click", () => {
    const value = nameInput.value.trim();
    if (!value) return;
    
    const card = createCard(value);  // <-- YES, this replaces the “create card” part
    
    cardContainer.appendChild(card);
    nameInput.value = "";
});

//Age Btn
ageBtn.addEventListener("click", () => {
    const value = ageInput.value.trim();
    if (!value) return;
    
    const card = createCard(value);  // <-- YES, this replaces the “create card” part
    
    cardContainer.appendChild(card);
    ageInput.value = "";
});

//Last Name Btn
ageBtn.addEventListener("click", () => {
    const value = lastNameInput.value.trim();
    if (!value) return;
    
    const card = createCard(value);  // <-- YES, this replaces the “create card” part
    
    cardContainer.appendChild(card);
    lastNameInput.value = "";
});

// Add card Btn
addCardBtn.addEventListener("click", () => {
  const card = document.createElement("div"); // create the card
  card.className = "card";
  card.innerText = "Stop Adding Cards!!!!";

  cardContainer.appendChild(card); // add it to the container
});


//Clear All Btn
clearAllBtn.addEventListener("click", () =>{
    cardContainer.innerHTML = "";
})
