<template>
    <div>
        <nav>
            <router-link to="/admin/products">Головна</router-link>
            <router-link to="/admin/reviews">Відгуки</router-link>
        </nav>

        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
    export default {
        name: 'AdminDashboard',
    };

</script>

<style>

</style>