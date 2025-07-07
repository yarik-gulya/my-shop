<template>
    <div>
        <h1>Авторизація</h1>
        <input type="text" v-model="username" placeholder="Логін">
        <input type="password" v-model="password" placeholder="Пароль">
        <button v-on:click="login">Увійти</button>
        <p v-if="message" class="error">{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            message: "",
            users: []
        };
    },
    async mounted() {
        try {
            const response = await fetch("/admin.json");
            if (!response.ok) {
                throw new Error("HTTP помилка: " + response.status);
            }
            this.users = await response.json();
        } catch (error) {
            console.error("Помилка завантаження JSON: " + error);
            this.message = "Помилка сервера! Спробуйте пізніше.";
        }
    },
    methods:{
        login: function(){
            if (!this.username || !this.password){
                this.message = "Введіть логін та пароль!";
                return;
            }

            const user = this.users.find(function(u){
                return u.username === this.username && u.password === this.password;
            }.bind(this));

            if (user){
                localStorage.setItem("authUser", this.username);
                this$router.push("/profile");
            } else {
                this.message = "Невірний логін або пароль!";
            }
        }
    }
}
</script>