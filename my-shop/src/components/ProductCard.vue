<template>
    <div class="product-card">
        <img :src="image" :alt="name" class="product-image" />
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <p class="price">{{ price }} грн</p>
        <button class="buy-button">Купити</button>
    </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    name: String,
    price: Number,
    image: String,
  },

  setup(props) {
    const addToCart = inject("addToCart");

    function handleAddToCart() {
      addToCart({
        name: props.name,
        price: props.price,
        image: props.image,
      });
    }

    return { addToCart: handleAddToCart };
  },
};
</script>

<style scoped>
.product-card {
    max-width: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.price {
    font-size: 18px;
    font-weight: bold;
    color: #28a745;
}

.buy-button {
    background: #007bff;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
    margin-bottom: 20px;
}

.buy-button:hover {
    background: #0056b3;
}
</style>