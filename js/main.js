const app = Vue.createApp({
    data() {
        return {
            items:[],
            selectedItem:null,
            loading: false,
            error:null
        }
    }
created() {
        this.getItems();
    },
 methods: {
   getItems() {
    this.loading = true;
     this.error = null;

      fetch("https)
      .then(response => response.json())
       .then(data => {
         this.items = data;
        this.loading = false;

})
});
app.mount("#app");