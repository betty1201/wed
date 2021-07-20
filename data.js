Vue.createApp({
    data: function () {
        return {
            data: []
        }
    },
    methods: {
        onClick(){
            axios.get("https://randomuser.me/api/?results=48")
            .then((res) => {
                this.data = res.data.results;
            })
        }
    },
    mounted: function () {
            axios.get("https://randomuser.me/api/?results=48")
            .then((res) => {
                this.data = res.data.results;
            })
        }
}).mount("#app");