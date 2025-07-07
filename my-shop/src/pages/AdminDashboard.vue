<template>
    <div>
        <header>
            <h1>Магазин</h1>
            <nav>
                <router-link to="/admin/products">Головна</router-link>
                <router-link to="/admin/reviews">Відгуки</router-link>
                <router-link to="/admin/contacts">Контакти</router-link>
            </nav>
        </header>
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
export default {
    name: 'AdminDashboard'
}
</script>
<style scoped>
h1 {
    padding-top: 40px;
    transition: 2s;
}

h1:hover {
    transform: scale(1.5);
}

header {
    background: linear-gradient(90deg, #232526 0%, #414345 100%);
    color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: 0 0 12px 12px;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 24px 0;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 10px 24px;
    border-radius: 6px;
    transition: background 0.2s, color 0.2s;
}

nav a:hover {
    background: #ffb347;
    color: #232526;
}

main {
    padding: 0px 24px;
    background: #f7f7fa;
    min-height: 70vh;
    border-radius: 12px;
    margin-top: 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}
</style>