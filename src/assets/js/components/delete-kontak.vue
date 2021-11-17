<template>
    <div id="delete-kontak">
        <h1>Hapus Kontak {{ kontak.name }}</h1>

        <p><router-link :to="{ name: 'all_kontak' }">Kembali ke daftar kontak</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="deleteKontak">
            <p><button class="btn btn-danger">Hapus Kontak</button></p>
        </form>
    </div>
</template>

<script>
    import Notification from './notifications.vue';

    export default{
        data(){
            return{
                kontak:{},
                notifications:[]
            }
        },

        created: function(){
            this.getKontak();
        },

        methods: {
            getKontak: function()
            {
                this.$http.get('http://localhost:3000/api/kontak/daftar/' + this.$route.params.id).then((response) => {
                    this.kontak = response.body;
                }, (response) => {

                });
            },

            deleteKontak: function()
            {
                this.$http.delete('http://localhost:3000/api/kontak/hapus?id=' + this.$route.params.id, this.product, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.$router.push({name: 'all_kontak'})
                }, (response) => {
                    this.notifications.push({
                        type: 'danger',
                        message: 'Kontak could not deleted'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
