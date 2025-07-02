import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';
import ManageContacts from './pages/ManageContacts.vue';

const routes = [
    {
        path: '/',
        component: AdminDashboard, // Використовуємо AdminDashboard як головний компонент
        children: [
            { path: '', component: ManageProducts }, // Домашня сторінка рендерить ManageProducts
            { path: 'reviews', component: ManageReviews }, // Відгуки
            { path: 'contacts', component: ManageContacts}
        ],
    },
    {
        path: '/admin',
        component: AdminDashboard,
        children: [
            { path: 'products', component: ManageProducts },
            { path: 'reviews', component: ManageReviews },
            { path: 'contacts', component: ManageContacts },
        ],
    },
];

const router = createRouter({
    history: createWebHistory('/my-shop/'), // Вказуємо базовий шлях для GitHub Pages
    routes,
});

export default router;