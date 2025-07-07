<template>
    <div>
        <h2>Кошик покупок</h2>
        <p v-if="cartItems.length === 0">Кошик порожній</p>
        <ul>
            <li v-for="(item, index) in cartItems" :key="index">
                <img :src="item.image" :alt="item.name" width="50" />
                {{ item.name }} - {{ item.price }} грн
                <button v-on:click="removeItem(index)">Видалити</button>
            </li>
        </ul>
        <p v-if="cartItems.length > 0">Загальна сума: {{ totalPrice }} грн</p>
    </div>
</template>

<style scoped>
    ul{
        list-style-type: none;
        padding: 10px;
    }

    ul li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
</style>

<script>
import { inject } from "vue";

export default {
    setup() {
        const cartItems = inject("cartItems");
        const totalPrice = inject("totalPrice");
        const removeItem = inject("removeItem");

        return { cartItems, totalPrice, removeItem };
    },
};
</script>