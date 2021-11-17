<template>
    <div id="all-kontak">
        <h1>Semua Kontak</h1>

        <p><router-link :to="{ name: 'create_kontak' }" class="btn btn-primary">Buat Kontak</router-link></p>

        <div class="form-group">
            <input type="text" name="search" v-model="kontakSearch" placeholder="Search kontak" class="form-control" v-on:keyup="searchKontaks">
        </div>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Nomer HP</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="(kontak, index) in kontaks" :key="index">
                    <td>{{ kontak.id }}</td>
                    <td>{{ kontak.name }}</td>
                    <td>{{ kontak.email }}</td>
                    <td>{{ kontak.no_handphone }}</td>
                    <td>
                        <router-link :to="{name: 'edit_kontak', params: { id: kontak.id }}" class="btn btn-primary">Edit</router-link>
                        <router-link :to="{name: 'delete_kontak', params: { id: kontak.id }}" class="btn btn-danger">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                kontaks: [],
                originalKontaks: [],
                kontakSearch: ''
            }
        },

        created: function()
        {
            this.fetchKontakData();
        },

        methods: {
            fetchKontakData: function()
            {
                this.$http.get('http://localhost:3000/api/kontak/daftar').then((response) => {
                    
                    this.kontaks = response.body;
                    // console.log(this.kontaks)
                    this.originalKontaks = this.kontaks;
                }, (response) => {

                });
            },

            searchKontaks: function()
            {
                if(this.kontakSearch == '')
                {
                    this.kontaks = this.originalKontaks;
                    return;
                }

                var searchedKontaks = [];
                for(var i = 0; i < this.originalKontaks.length; i++)
                {
                    var productName = this.originalKontaks[i]['name'].toLowerCase();
                    if(productName.indexOf(this.kontakSearch.toLowerCase()) >= 0)
                    {
                        searchedKontaks.push(this.originalKontaks[i]);
                    }
                }

                this.kontaks = searchedKontaks;
            }
        }
    }
</script>
