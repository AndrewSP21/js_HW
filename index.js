async function fetchData() {
  try {
    const response = await fetch('data.json')
    // console.log(response);

    if (!response.ok) {
      throw new Error('Не удалось получить данные с data.json')
    }
    const data = await response.json();
    // console.log(data);

    const productBox = document.querySelector('.bottom');

    data.forEach(({ image, product, description, price }) => {
      const productEl = `
            <div class="bottom_item">
                <div class="bottom_img_cart">
                    <img src="${image}" alt="" class="bottom_img">
                    <div class="bottom_basket">
                    <img src="img/StrokeEffect.svg" alt="" class="bottom_basket_img">
                    <p class="bottom_basket_text"><a>Add to Cart</a></p>
                    </div>
                </div>
                <h2 class="bottom_h2">${product}</h2>
                <h3 class="bottom_h3">
                    ${description}
                </h3>
                <h2 class="bottom_h2_price">${price}</h2>
            </div>
            `;
      productBox.insertAdjacentHTML('beforeend', productEl);
    });

    addToCart();


  } catch (error) {
    console.error(error);
  }

}
fetchData();

function addToCart() {

  const productContainer = document.querySelectorAll('.bottom_item');
  for (let i = 0; i < productContainer.length; i++) {
    const element = productContainer[i].querySelector('.bottom_img');
    const element2 = productContainer[i].querySelector('.bottom_h2');
    const element4 = productContainer[i].querySelector('.bottom_h2_price');

    const nameImage = element.src;
    const nameProduct = element2.textContent;
    const namePrice = element4.textContent;

    // console.log(nameImage);

    const buttonAdd = productContainer[i].querySelector('.bottom_basket')
    buttonAdd.addEventListener('click', () => {
      const cartItemHidden = document.querySelector('.cart_item');
      cartItemHidden.style.display = 'inline';
      console.log('Кнопка была нажата');
      // console.log(nameImage);
      const productAdded =
        `
                    <div class="product-card product-card__card">
                <div class="product-card__img">
                  <img src="${nameImage}" alt="product-photo" class="product-card__img-inside">
                </div>
    
                <div class="product-card__info">
                  <p class="product-card__title">${nameProduct}</p>
                  <div class="product-card__property">
                    <p class="product-card__property-name">Price: &ensp;</p>
                    <p class="product-card__property-value text__red">${namePrice}</p>
                  </div>
                  <div class="product-card__property">
                    <p class="product-card__property-name">Color: &ensp;</p>
                    <p class="product-card__property-value">Red</p>
                  </div>
                  <div class="product-card__property">
                    <p class="product-card__property-name">Size: &ensp;</p>
                    <p class="product-card__property-value">XI</p>
                  </div>
                  <div class="product-card__property">
                    <label class="product-card__property-name" for="Quantity1">Quantity: &ensp;</label>
                    <input class="product-card__property-input" type="text" name="Quantity1" id="Quantity1" placeholder=""
                      value="1">
                  </div>
                </div>
                <svg class="product-card__sign-close" width="18" height="18" viewBox="0 0 18 18" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                    fill="#575757" />
                </svg>
    
              </div>
                    `
      const cartItem = document.querySelector('.content-card');
      cartItem.insertAdjacentHTML("beforeend", productAdded);
      dropFromCart();

    });

  }
};

function dropFromCart() {
  const dropProduct = document.querySelectorAll('.product-card__sign-close');
  for (let i = 0; i < dropProduct.length; i++) {
    let element = dropProduct[i];
    element.addEventListener('click', (e) => {
      console.log('Нажал кнопку закрыть.');
      const forDrop = element.closest('.product-card');
      forDrop.remove();
      e.stopImmediatePropagation();
      console.log(document.querySelector('.content-card').querySelector('div') == null);
      if (document.querySelector('.content-card').querySelector('div') == null) {
        const cartItemHidden = document.querySelector('.cart_item');
        cartItemHidden.style.display = 'none';
      }
    })
  }
}

