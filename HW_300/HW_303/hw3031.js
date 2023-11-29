let feedbackJson = '';
let initialData = '';

const inputButton = document.querySelector(".inputButton");
const productInput = document.querySelector(".productInput");
const productName = document.querySelector(".product");
const errMsg = document.querySelector(".errMsg");

function initial() {
    feedbackJson = localStorage.getItem('feedBack');
    initialData = JSON.parse(feedbackJson)
}

class Post {
    handleEvent() { //Автоматически взывается метод класса, если класс передается в addEventListener
        initial();
        const inputValue = productInput.value;
        errMsg.textContent = "";

        if (productName.value.length > 0 && productInput.value.length > 0) {
            const nextIdPost = this.nextId(initialData);
            const product = productName.value;
            initialData = this.addPost(product, nextIdPost, inputValue, initialData);
            productInput.value = '';
            productName.value = '';
            console.log('initialData', initialData);
            localStorage.setItem('feedBack', JSON.stringify(initialData));
        } else {
            errMsg.textContent =
                `Ошибка. Оба поля должны быть заполнены.`;
        }
    }
    nextId(arr) {
        let maxId = 0;
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].reviews.length; j++) {
                    maxId = arr[i].reviews[j].id > maxId ? arr[i].reviews[j].id : maxId;
                }
            }
        }

        return maxId + 1;
    }
    addPost(product, nextIdPost, text, arr) {
        let newProduct = true;
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].product === product) {
                    arr[i].reviews.push({
                        id: nextIdPost,
                        text: text,
                    });
                    newProduct = false;
                }
            }
        } else { arr = [] }
        if (newProduct) {
            console.log(newProduct, 'newProduct');
            arr.push({
                product: product,
                reviews: [
                    {
                        id: nextIdPost,
                        text: text,
                    },
                ]
            });
            console.log(arr);
        }
        return arr;
    }
}
let post = new Post();

inputButton.addEventListener("click", post);
