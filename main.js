const body = document.querySelector("body");
const orderBtn = document.querySelector("#order__btn");
const addBtn = document.querySelector("#addbtn");
const deleteBtn = document.querySelector("#order__delete");
const modalBlock = document.querySelector("#modal");
const forumAside = document.querySelector("#forum__aside");
const form = document.querySelector("#form");
const surnameInput = document.querySelector("#surname__input");
const nameInput = document.querySelector("#name__input");
const patronymicInput = document.querySelector("#patronymic__input");
const countryInput = document.querySelector("#country__input");
const bornInput = document.querySelector("#born__input");
const genderInput = document.querySelector("#gender__input");
const tipsInput = document.querySelector("#tips__input");
const seriesInput = document.querySelector("#series__input");
const numberInput = document.querySelector("#number__input");

form.addEventListener("submit", createTask);
let TAKLIST = [];

function createTask(e) {
  e.preventDefault();
  if (
    surnameInput.value &&
    nameInput.value &&
    patronymicInput.value &&
    countryInput.value &&
    bornInput.value &&
    genderInput.value &&
    tipsInput.value &&
    seriesInput.value &&
    numberInput.value.trim().length > 0
  ) {
    const NewBAse = {
      Newsurname: surnameInput.value,
      Newname: nameInput.value,
      Newpatronymic: patronymicInput.value,
      Newcountry: countryInput.value,
      Newborn: bornInput.value,
      Newgender: genderInput.value,
      Newtips: tipsInput.value,
      Newseries: seriesInput.value,
      Newnumber: numberInput.value,
    };
    TAKLIST.unshift(NewBAse);
    close();
    Local();
    render();
  }
}

function render() {
  while (forumAside.firstChild) {
    forumAside.removeChild(forumAside.firstChild);
  }
  TAKLIST.map((i, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="base__block">
    <div class="block__title">
    <p>гость</p>
    <p>гражданство</p>
    <p>Год Рождения</p>
    <p>Пол</p>
    <p>Тип документа</p>
    <p>Серия документа</p>
    <p>Номер документа</p>
    </div>
    <div class="data">
    <p>${i.Newsurname},${i.Newname},${i.Newpatronymic}</p>
    <p>${i.Newcountry}</p>
    <p>${i.Newborn}</p>
    <p>${i.Newgender}</p>
    <p>${i.Newtips}</p>
    <p>${i.Newseries}</p>
    <p>${i.Newnumber}</p>
    </div>
    </div>`;
    forumAside.appendChild(div);
  });
}
orderBtn.addEventListener("click", () => {
  modalBlock.classList.add("modal__block");
  body.classList.add("active");
});
function close() {
  body.classList.remove("active");
  modalBlock.style.display = "none";
}
addBtn.addEventListener("submit", () => {
  form.reset();
});
function Local() {
  localStorage.setItem("base", JSON.stringify(TAKLIST));
}
document.addEventListener("DOMContentLoaded", () => {
  let DSLocal = localStorage.getItem("base");
  if (DSLocal) {
    TAKLIST = JSON.parse(DSLocal);
    render();
  }
});

deleteBtn.addEventListener("click", () => {
  while (TAKLIST[0]) {
    TAKLIST.splice(0, 1);
    render();
    Local();
  }
});
