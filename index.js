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
                    <p class="bottom_basket_text"><a href="Cart.html">Add to Cart</a></p>
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


    } catch (error) {
        console.error(error);
    }

}
fetchData();