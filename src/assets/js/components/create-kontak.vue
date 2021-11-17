<template>
    <div id="create-kontak">
        <h1>Buat Kontak</h1>

        <p><router-link :to="{ name: 'all_kontak' }">Kembali Ke daftar Kontak</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="addKontak">
            <div class="form-group">
                <label name="kontak_id">ID</label>
                <input type="text" class="form-control" disabled v-model="kontak.id" id="kontak_id">
            </div>

            <div class="form-group">
                <label name="kontak_name">Name</label>
                <input type="text" class="form-control" v-model="kontak.name" id="kontak_name" required>
            </div>

            <div class="form-group">
                <label name="kontak_email">Email</label>
                <input type="text" class="form-control" v-model="kontak.email" id="kontak_email" required>
            </div>

            <div class="form-group">
                <label name="kontak_no_handphone">Nomer HP</label>
                <input type="text" class="form-control" v-model="kontak.no_handphone" id="kontak_no_handphone" required>
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Create</button>
            </div>
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

        methods: {
            addKontak: function()
            {
                this.$http.post('http://localhost:3000/api/kontak/buat', this.kontak, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Kontak created successfully'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Kontak not created'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
