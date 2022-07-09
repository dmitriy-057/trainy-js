const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
  { hex: "#3f51b5", rgb: "63,81,181" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#00bcd4", rgb: "0,188,212" },
  { hex: "#009688", rgb: "0,150,136" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
  { hex: "#ff9800", rgb: "255,152,0" },
  { hex: "#795548", rgb: "121,85,72" },
  { hex: "#607d8b", rgb: "96,125,139" },
];

const palletteContainer = document.querySelector(".js-palette");
// 1.2- вызываем функцию
const cardsMarkup = createColorsCardsMarkup(colors);
// 1.3 - вешаем строку на существующий див
palletteContainer.insertAdjacentHTML(
  "beforeend",
  createColorsCardsMarkup(colors)
);
console.log(palletteContainer);
// 2.1 - вешаем делегирование на контейнер
palletteContainer.addEventListener("click", onPalletteContainerClick);
// 1.1 - ниже создаем функцию которая рендерит все палитры в одну строку
function createColorsCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
     <div><div><div> <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div></div></div></div>
      <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
      </div>
    </div>
    `;
    })
    .join("");
}
// функция-обработчик события по клику
function onPalletteContainerClick(e) {
  // элемент color-swatch хранится в переменной isColorSwatch
  const isColorSwatch = e.target.classList.contains("color-swatch");
  // 3 - указываем цель клику
  if (!isColorSwatch) {
    return;
  }

  const swatchEl = e.target;
  //   метод ".color-card" находит ближайшего предка с указанным классом
  const parentColorCard = swatchEl.closest(".color-card");
  console.log(parentColorCard);
  console.log(swatchEl.dataset.hex);

  removeActiveCardClass();
  addCurrentActiveCard(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

// функция для  снятия с карточки класса актив
function removeActiveCardClass() {
  // получаем доступ к классу актив
  const currentActiveCard = document.querySelector(".color-card.is-active");
  // делаем активной текущую карточку
  if (currentActiveCard) {
    currentActiveCard.classList.remove("is-active");
  }
}

// функция для добавления класса актив на текущую карточку
function addCurrentActiveCard(card) {
  // parentColorCard.classList.add("is-active");
  card.classList.add("is-active");
}

// функция для привязки цвета боди к цвету активной карточки
function setBodyBgColor(color) {
  //   document.body.style.backgroundColor = swatchEl.dataset.hex;
  document.body.style.backgroundColor = color;
}
