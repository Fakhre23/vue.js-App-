const app = Vue.createApp({ //that called root component 
    //data, functions 
     data() {
        return {
            title: 'the final empire',
            author: 'Fakhre',
            age: '21',
        }
     }
})

app.mount('#app')