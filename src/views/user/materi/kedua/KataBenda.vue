<script setup>
import NavbarUser from "../../../../components/NavbarUser.vue";
</script>
<template>
<NavbarUser/>
<div class="container pt-4">
<div class="form-floating mb-1 mt-1 col-2">
    <input class="form-control" id="myInput" type="text" placeholder="Search..">
    <label>Search</label>
</div>
    <div class="card">
    <div class="card-header"><strong class="h3">Kata Benda</strong></div>
                <div class="card-body">
                <table class="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Kanji</th>
                        <th>Jepang</th>
                        <th>Indonesia</th>
                    </tr>
                    </thead>
                    <tbody id="myTable">
                    <tr v-for="benda in katabenda" :key="benda.id">
                        <td> {{ benda.id}} </td>
                        <td> {{ benda.kanji}} </td>
                        <td> {{ benda.romaji}} </td>
                        <td> {{ benda.arti}} </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
    </div>
</template>
<style>
</style>
<script>
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

import axios from 'axios'
import NavbarAdmin from '../../../../components/NavbarAdmin.vue';
export default {
    data() {
        return {
            katabenda: "",
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            axios.get("http://localhost:3000/katabenda").then(res => {
                this.katabenda = res.data;
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    components: { NavbarAdmin }
}
</script>