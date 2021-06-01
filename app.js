const app = Vue.createApp({
    data() {
        return {
            name: 'Angela',
            age: 32,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg'
        } 
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },
        outputRandomNum() {
            const randomNum = Math.random();
            return randomNum;
        }
    }
});

app.mount('#assignment');