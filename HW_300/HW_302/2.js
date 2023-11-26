"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.
 
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function checkLength(post) {
  return post.length < 50 || post.length > 500 ? false : true;
}

function viewArray(arr) {
  let htmlText = "";
  for (let i = 0; i < arr.length; i++) {
    htmlText +=
      '<div class="listProduct"> <div class="mainProduct"><div class="product">' +
      arr[i].product +
      "</div><ul>";
    for (let j = 0; j < arr[i].reviews.length; j++) {
      htmlText +=
        '<li class="post"> #' +
        arr[i].reviews[j].id +
        " " +
        arr[i].reviews[j].text +
        "</li>";
    }
    htmlText +=
      "</ul></div><div class='mainInput'>" +
      '<textarea class="productInput" rows="4"cols="45" name="text"></textarea>' +
      '<button class="inputButton">Добавить</button>' +
      '<div class="errMsg"></div></div></div>';
  }
  return htmlText;
}

const content = document.querySelector(".top");
content.innerHTML = viewArray(initialData);

const inputButton = document.querySelectorAll(".inputButton");

class Post {
  handleEvent(event) {
    const inputValue = event.srcElement.previousElementSibling.value;
    const errMsgElement = event.srcElement.nextElementSibling;
    errMsgElement.textContent = "";

    if (inputValue.length > 0 && checkLength(inputValue)) {
      const nextIdPost = this.nextId(initialData);
      const product =
        event.srcElement.parentElement.previousElementSibling.querySelector(
          ".product"
        ).textContent;
      const foundUL =
        event.srcElement.parentElement.previousElementSibling.getElementsByTagName(
          "ul"
        )[0];
      this.addPost(product, nextIdPost, inputValue, initialData);
      const newLi = document.createElement("li");
      newLi.appendChild(document.createTextNode("#" + nextIdPost + " " + inputValue));
      foundUL.appendChild(newLi);
      event.srcElement.previousElementSibling.value = ''
    } else {
      errMsgElement.textContent =
        `Ошибка. Отзыв должен быть не менее 50 и не более 500 символов. Длина вашего отзыва: ${inputValue.length}.`;
    }
  }
  nextId(arr) {
    let maxId = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].reviews.length; j++) {
        maxId = arr[i].reviews[j].id > maxId ? arr[i].reviews[j].id : maxId;
      }
    }
    return maxId + 1;
  }
  addPost(product, nextIdPost, text, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].product === product) {
        arr[i].reviews.push({
          id: nextIdPost,
          text: text,
        });
      }
    }
  }
}
let post = new Post();

inputButton.forEach((element) => {
  element.addEventListener("click", post);
});
