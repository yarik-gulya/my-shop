<template>
    <div>
        <h2>Відгуки</h2>
        <table>
            <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Рейтинг</th>
                    <th>Коментар</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="review in reviews" :key="review.id">
                    <td>{{ review.Name }}</td>
                    <td>{{ review.Rating }}</td>
                    <td>{{ review.Comment }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  data() {
    return {
      reviews: []
    };
  },
  created() {
        const cvsContent = `Name,Rating,Comment
    Іван,5,Дякую за швидку доставку
    Ольга,5,Все супер! Буду замовляти ще
    Андрій,5,Обслуговування, як завжди - на висоті
    Марина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.
    Сергій,5,Рекомендую цей чудовий магазин усім!
    Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
    Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
    Анна,5,Дякую за чудові знижки
    Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.`;
    Papa.parse(cvsContent.trim(), {
        header: true,
        complete: (results) => {
            this.reviews = results.data;
        },
        });
    },
};
</script>
<style scoped>
h2 {
    text-align: center;
}

table {
    width: 90%;
    margin: 0 auto;
}

th,
td {
    background-color: #f8f9fa;
    padding: 4px;
}
.reviews {
  padding: 20px;
  background-color: #f9f9f9;
}
</style>