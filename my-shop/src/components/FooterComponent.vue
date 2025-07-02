<template>
    <footer class="footer">
        <div class="footer-content">
            <ul>
                <li><router-link to="/admin/contacts">Про нас</router-link></li>
                <li>
                    <p>Email: support@myshop.com</p>
                    <p>Телефон: +380 44 123 45 67</p>
                </li>
                <li><router-link to="/admin/reviews">Відгуки</router-link></li>
            </ul>

            <input type="text" v-model="message" />
            <p>You entered: {{ message }}</p>

            <p>&copy; 2023 My Shop. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',

    data(){
        return{
            message: ''
        };
    }
}
</script>

<style scoped>
.footer {
    margin: 20px;
    background: linear-gradient(-90deg, #232526 0%, #414345 100%);
    color: #ffffff;
    padding: 20px;
    text-align: center;
}

ul {
    list-style: none;
    padding: 0;
    margin: 20px 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

ul li a {
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 10px 24px;
    border-radius: 6px;
    transition: background 0.2s, color 0.2s;
}

ul li a:hover {
    background: #ffb347;
    color: #232526;
}
</style>
