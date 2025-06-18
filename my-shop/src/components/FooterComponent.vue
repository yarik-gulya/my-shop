<template>
    <footer class="footer">
        <div class="footer-content">
            <ul>
                <li><a href="">Про нас</a></li>
                <li>
                    <p>Email: support@myshop.com</p>
                    <p>Телефон: +380 44 123 45 67</p>
                </li>
                <li><a href="">Доставка</a></li>
            </ul>
            
            <p>&copy; 2023 My Shop. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
};
</script>

<style scoped>
.footer {
    margin: 20px;
    background-color: #2d0404;
    color: #ffffff;
    padding: 20px;
    text-align: center;
}
ul{
    list-style: none;
    padding: 0;
    margin: 20px 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
a{
    text-decoration: none;
    font-weight: bold;
}
</style>
