<template>
    <div>
        <h2>Зв'яжіться з нами</h2>
        <ul>
            <li>Електронна пошта: support@myshop.com</li>
            <li>Телефон: +38 (044) 123-45-67</li>
            <li>Чат на сайті</li>
            <li>Форма зворотного зв'язку</li>
            <li>Viber: +38 (067) 123-45-67</li>
            <li>Telegram: @myshop_support</li>
            <li>Facebook Messenger: facebook.com/myshop</li>
            <li>Instagram Direct: @myshop_ua</li>
            <li>WhatsApp: +38 (050) 123-45-67</li>
            <li>Пошта: м. Київ, вул. Прикладна, 1</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'ContactComponents'
};
</script>
<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
li{
    transition: 1s;
}

li:hover{
    transform: scale(2);
}
</style>