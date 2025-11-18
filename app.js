const pageTitle = document.getElementById("page-title");
const changeTitleBtn = document.getElementById("change-title-btn");
const titleColorBtn = document.getElementById("title-color-btn");

const colorBtn = document.getElementById("change-bg-btn"); 
const addCardBtn = document.getElementById("add-card-btn");
const nameInput = document.getElementById("name-box");
const addNameBtn = document.getElementById("add-name-btn");
const lastNameInput = document.getElementById("last-name-box");
const addLastNameBtn = document.getElementById("add-lastname-btn");
const clearAllBtn = document.getElementById("clear-all-btn");
const ageInput = document.getElementById("age");
const ageBtn = document.getElementById("age-btn");
const DOBInput = document.getElementById("DOB");
const dobBtn = document.getElementById("dob-btn");
const outputEmail = document.getElementById("user-email");
const inputEmail = document.getElementById("input-email");
const emailBtn = document.getElementById("email-btn");


const cardContainer = document.getElementById("card-container");


// Change title button
changeTitleBtn.addEventListener("click", () => {
  if (pageTitle.innerText === "Welcome") {
    pageTitle.innerText = "Bienvenidos";
  } else {
    pageTitle.innerText = "Welcome";
  }
});

titleColorBtn.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    pageTitle.style.color = randomColor;

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
    
    const card = createCard(value);  
    
    cardContainer.appendChild(card);
    nameInput.value = "";
});

//LastName Btn
addLastNameBtn.addEventListener("click", () => {
    const value = lastNameInput.value.trim();
    if (!value) return;
    
    const card = createCard(value);  
    
    cardContainer.appendChild(card);
    lastNameInput.value = "";
});

//Age Btn
ageBtn.addEventListener("click", () => {
    const value = ageInput.value.trim();
    if (!value) return;
    
    const card = createCard(value);  
    
    cardContainer.appendChild(card);
    ageInput.value = "";
});

// Add card Btn
addCardBtn.addEventListener("click", () => {
  const card = document.createElement("div"); 
  card.className = "card";
  card.innerText = "Stop Adding Cards!!!!";

  cardContainer.appendChild(card); 
});


//Clear All Btn
clearAllBtn.addEventListener("click", () =>{
    cardContainer.innerHTML = "";
})

//DDOB Btn
dobBtn.addEventListener("click", () => {
    
    const value = DOBInput.value.trim();
    if (!value) return;
    
    const card = createCard(value);  
    
    cardContainer.appendChild(card);
    DobInput.value = "";
});

// Email
emailBtn.addEventListener("click", () => {
    if(inputEmail.value.trim() === "")
    {
        outputEmail.innerText = "What is your email?";
    }
    else{
        outputEmail.innerText = "Your email is " + inputEmail.value.trim();
    }
});