<template>
    <div>
        <h2>Адмін-панель</h2>
        <p>Вітаємо, {{ username }}</p>
        <button v-on:click="logout">Вийти</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username: localStorage.getItem("authUser") || ""
        }
    },
    methods: {
        logout(){
            localStorage.removeItem("authUser");
            this.$router.push("/")
        }
    },
    beforeMount(){
        if (!this.username){
            this.$router.push("/login")
        }
    }
}
</script>