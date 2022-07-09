const tagsList = document.querySelector(".tags");

// // выбираем один текущий тэг
// tagsList.addEventListener("click", onTagsListClick);

// let selectedTag = null;
// function onTagsListClick(e) {
//   const nextActiveTag = e.target;
//   if (nextActiveTag.nodeName !== "BUTTON") {
//     return;
//   }

//   //   console.log(e.currentTarget);
//   const currentActiveTag = document.querySelector(".tags__btn--active");

//   if (currentActiveTag) {
//     currentActiveTag.classList.remove("tags__btn--active");
//   }
//   // след строка заменяет if --> currentActiveTag?.classList.remove("tags__btn--active");
//   nextActiveTag.classList.add("tags__btn--active");
//   selectedTag = nextActiveTag.dataset.value;
//   console.log(selectedTag);
// }

// добавляем в контейнер выбранные теги, без их дублирования
const tagsContainer = new Set();
tagsList.addEventListener("click", addInTagsContainer);
