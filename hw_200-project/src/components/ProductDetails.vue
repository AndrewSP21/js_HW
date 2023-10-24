<template>
    <div>
        <table>
            <tr>
                <th class="thZ">Наименование</th>
                <th class="thZ">Цена</th>
                <th class="thZ">Наличие</th>
            </tr>
            <tr v-for="(prod, id) in product" :key="id">
                <td class="thZ">{{ prod.name }}</td>
                <td class="thZ">{{ formattedPrice(prod.price) }}</td>
                <td class="thZ">{{ testAvailable(prod.available) }}</td>
            </tr>


        </table>

    </div>
</template>

<script>

export default {
    name: 'ProductDetails',
    data() {
        return {
            fp: 0,
            product: [{
                name: 'Чайник',
                price: 99.99,
                available: true,
            },
            {
                name: 'Печь СВЧ',
                price: 123.15,
                available: false,
            }
            ]
        }
    },
    methods: {
        testAvailable: function (trueTest) {
            if (trueTest) {
                return 'Available'
            } else {
                return 'Out of stock'
            }
        },
        formattedPrice: function (params) {
            return '$' + params
        }
    },

    //Не понятно, как заставить вычисляемое свойство работать.
    //Почему-то игнорируется измененый параметр и возвращает, только то что пришло на входе.
    //Хотя если просмотреть в отладчике vue в браузере, данные у переменных обновляются.
    /* computed: {
        formattedPrice: {
            get() {
                return this.fp
            },
            set(a) {
                this.fp = '$' + a
            }

        },

    } */
}
</script>

<style scoped lang="scss">
@import "../assets/style.css"
</style>

