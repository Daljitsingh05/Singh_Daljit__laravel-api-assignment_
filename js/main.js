const app = Vue.createApp({
    data() {
        return {
            items:[],
            selectedItem:null,
            loading: false,
            error:null
        }
    }
});
app.mount("#app");