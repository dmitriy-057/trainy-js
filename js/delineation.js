// const body = document.querySelector("body");
// const divEl = document.querySelector("div");
// console.log(divEl);
// const buttonEl = document.querySelectorAll("button");

// // делегируем события, то есть на родительский контейнер вешаем событие, которое будет срабатывать для всех его дочерних елементов коллекции
// divEl.addEventListener("click", onClickDiv);
// // пишем функиию которая будет ловить клик только на кнопках
// function onClickDiv(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
//   // evt.target -это целевой элемент, буквально на каком элементе произошел клик
//   console.log(evt.target.textContent);
//   // evt.currentTarget - это элемент на котором ловится событие
//   console.log(evt.currentTarget);
// }

// const addBtn = document.createElement("button");
// let labelCounter = 6;

// addBtn.textContent = "I can add btn";
// console.log(addBtn);
// body.prepend(addBtn);
// addBtn.addEventListener("click", onAddBtn);

// function onAddBtn() {
//   const btn = document.createElement("button");
//   btn.textContent = `Button ${labelCounter}`;
//   divEl.appendChild(btn);
//   labelCounter += 1;
// }

