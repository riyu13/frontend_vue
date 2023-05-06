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
    <div class="card-header"><strong class="h3">Kata Kerja</strong></div>
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
                    <tr v-for="kerja in katakerja" :key="kerja.id">
                        <td> {{ kerja.id}} </td>
                        <td> {{ kerja.kanji}} </td>
                        <td> {{ kerja.romaji}} </td>
                        <td> {{ kerja.arti}} </td>
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
            katakerja: "",
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            axios.get("http://localhost:3000/katakerja").then(res => {
                this.katakerja = res.data;
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    components: { NavbarAdmin }
}
</script>