/* 1. Страница добавления отзыва о продукте.
Должна содержать форму с полем для ввода названия продукта и текстовое поле 
для текста отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
Необходимо реализовать проверку, оба поля должны быть заполнены, если это не 
так, необходимо выводить ошибку пользователю. 
2. Страница просмотра отзывов.
Показывает список всех продуктов, на которые были оставлены отзывы.
Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" 
(надпись кнопки меняется), при нажатии на которую показываются / скрываются 
отзывы продукта.
После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв 
из localstorage и со страницы. 
Если удалены все отзывы продукта, то продукт вовсе должен быть удален, как из 
localstorage, так и со страницы.*/

// const initialData = [
//     {
//         product: "Apple iPhone 13",
//         reviews: [
//             {
//                 id: 1,
//                 text: "Отличный телефон! Батарея держится долго.",
//             },
//             {
//                 id: 2,
//                 text: "Камера супер, фото выглядят просто потрясающе.",
//             },
//         ],
//     },
//     {
//         product: "Samsung Galaxy Z Fold 3",
//         reviews: [
//             {
//                 id: 3,
//                 text: "Интересный дизайн, но дорогой.",
//             },
//         ],
//     },
//     {
//         product: "Sony PlayStation 5",
//         reviews: [
//             {
//                 id: 4,
//                 text: "Люблю играть на PS5, графика на высоте.",
//             },
//         ],
//     },
// ];



// let feedbackJson = '[{"product":"Apple iPhone 13","reviews":[{"id":1,"text":"Отличный телефон! Батарея держится долго."},{"id":2,"text":"Камера супер, фото выглядят просто потрясающе."}]},{"product":"Samsung Galaxy Z Fold 3","reviews":[{"id":3,"text":"Интересный дизайн, но дорогой."}]},{"product":"Sony PlayStation 5","reviews":[{"id":4,"text":"Люблю играть на PS5, графика на высоте."}]}]';


let feedbackJson = localStorage.getItem('feedBack');

let initialData = JSON.parse(feedbackJson)
// JSON.stringify(initialData)
// console.log(initialData);

function viewArray(arr) {
    let htmlText = "<div class='listProduct'>";
    for (let i = 0; i < arr.length; i++) {
        htmlText +=
            `
                <div class="mainProduct">
                    <div class="productLine">
                        <div class="product"> ${arr[i].product} </div>
                        <button class="showFeedback">Скрыть отзывы</button>
                    </div>
                    <ul>`;
        for (let j = 0; j < arr[i].reviews.length; j++) {
            htmlText +=
                `
                        <div class="postLine">
                            <li class="post"># ${arr[i].reviews[j].id} ${arr[i].reviews[j].text} </li>
                            <button class="deleteFeedback">Удалить</button>
                        </div>
                        `;
        }
        htmlText +=
            `</ul> 
            </div>`;
    }
    return htmlText;
};

const content = document.querySelector(".top");

if (feedbackJson === null || feedbackJson == "[]") {
    console.log('Нет отзывов!');
    content.innerHTML = 'Нет отзывов!'
} else {
    content.innerHTML = viewArray(initialData);
    console.log('Есть отзывы!');
}



const buttonShowFeedback = document.querySelectorAll(".showFeedback");
const buttonDeleteFeedback = document.querySelectorAll(".deleteFeedback");


buttonDeleteFeedback.forEach(el => {
    el.addEventListener('click', () => {
        const postLine = el.parentElement;
        const idFeedback = postLine.querySelector('li').innerHTML.split(' ')[1];
        if (deleteFeedbackByID(initialData, idFeedback)) {  // console.log('Удалился последний элемент!');
            const mainProduct = el.closest('.mainProduct');
            mainProduct.style.display = 'none'
        };
        postLine.remove();
    })
});


function deleteFeedbackByID(arr, id) {
    let lastElement = false;
    let productId = Infinity;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].reviews.length; j++) {
            if (arr[i].reviews[j].id == id) { //console.log(`Удаляем элемент ${arr[i].reviews[j].text}`);
                arr[i].reviews.splice(j, 1);
                if (arr[i].reviews.length === 0) {
                    lastElement = true;
                    productId = i;
                }
            }
        }
        if (lastElement) {
            arr.splice(productId, 1);
        }
    }
    localStorage.setItem('feedBack', JSON.stringify(initialData));
    return lastElement;
}

buttonShowFeedback.forEach(el => {
    el.addEventListener('click', () => {
        const mainProduct = el.closest('.mainProduct');
        const feedBackProduct = mainProduct.querySelector('ul')
        if (feedBackProduct.style.display !== 'none') {
            feedBackProduct.style.display = 'none';
            el.innerHTML = 'Показать отзывы'
        } else {
            feedBackProduct.style.display = 'block';
            el.innerHTML = 'Скрыть отзывы'
        }
    })
});

