<template>
  <div>
    <h2>Пошук товарів</h2>
    <input type="text" v-model="searchQuery" placeholder="Введіть назву товару" />
    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';

export default {
  components: {
    ProductList
  },
  data() {
    return {
      searchQuery: "", // Що шукає користувач
      products: [
        {
          name: "Смартфон Samsung Galaxy S23",
          price: 35000,
          image: "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg"
        },
        {
          name: "Ноутбук Apple MacBook Air M2",
          price: 58000,
          image: "https://img.freepik.com/free-photo/workplace-with-laptop-stand-near-eyeglasses_23-2148040478.jpg"
        },
        {
          name: "Бездротові навушники Sony",
          price: 7800,
          image: "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg"
        },
        {
          name: "Механічна клавіатура HyperX",
          price: 4500,
          image: "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg"
        },
        {
          name: "Смарт-годинник Apple Watch Series 9",
          price: 17000,
          image: "https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg"
        },
        {
          name: "Портативна колонка JBL Series 1",
          price: 5200,
          image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg"
        },
        {
          name: "Телевізор Samsung 4K QLED",
          price: 28000,
          image: "https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg"
        },
        {
          name: "Фітнес-браслет Xiaomi Mi Band 7",
          price: 1800,
          image: "https://img.freepik.com/free-photo/futuristic-virtual-reality-headset-illuminates-dark-studio-shot-generated-by-ai_188544-13298.jpg"
        },
        {
          name: 'Планшет Apple iPad Air',
          price: 25000,
          image: 'https://img.freepik.com/free-photo/modern-office-desk-composition-with-technological-device_23-2147915894.jpg?ga=GA1.1.265073241.1744218660&semt=ais_hybrid&w=740'
        },
        {
          name: 'Електронна книга Kindle Paperwhite',
          price: 6000,
          image: 'https://img.freepik.com/free-photo/high-angle-man-reading-digital-magazine_23-2150162702.jpg?ga=GA1.1.265073241.1744218660&semt=ais_hybrid&w=740'
        },
        {
          name: 'Ігрова консоль Sony PlayStation 5',
          price: 45000,
          image: 'https://img.freepik.com/free-photo/high-angle-controllers-headphones_23-2149829136.jpg?ga=GA1.1.265073241.1744218660&semt=ais_hybrid&w=740'
        },
        {
          name: 'Веб-камера Logitech C920',
          price: 2500,
          image: 'https://img.freepik.com/free-photo/wireless-home-security-surveillance-camera_53876-96819.jpg?ga=GA1.1.265073241.1744218660&semt=ais_hybrid&w=740'
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 20px;
}
input{
  width: 300px;
  height: 30px;
  padding: 5px;
  margin: 20px;
  border-radius: 20px;
  transition: 1s;
}
input:focus {
  outline: none;
  border: 2px solid #ffb347;
}
input::placeholder {
  color: #aaa;
}
input:hover{
  transform: scale(1.5);
}
</style>
