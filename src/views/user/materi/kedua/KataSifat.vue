<script>
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function(){
    $("#myInput2").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable2 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

import axios from 'axios'
import NavbarAdmin from '../../../../components/NavbarAdmin.vue';
import NavbarUser from '../../../../components/NavbarUser.vue';
export default {
    data() {
        return {
            katasifat: "",
            katasifat2: "",
        };
    },
    mounted() {
        this.load();
        this.load2();
    },
    methods: {
        load() {
            axios.get("http://localhost:3000/katasifat").then(res => {
                this.katasifat = res.data;
            }).catch((err) => {
                console.log(err);
            });
        },
        load2() {
            axios.get("http://localhost:3000/katasifat2").then(res => {
                this.katasifat2 = res.data;
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    components: { NavbarAdmin, NavbarUser }
}
</script>

<template>
<NavbarUser/>
<div class="row">
<div class="col-1"></div>
<div class="col">
<div class="container pt-4">
<div class="form-floating mb-1 mt-1 col-3">
    <input class="form-control" id="myInput" type="text" placeholder="Search..">
    <label>Search</label>
</div>
    <div class="card">
    <div class="card-header"><strong class="h3">Kata Sifat (i)</strong></div>
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
                    <tr v-for="sifat in katasifat" :key="sifat.id">
                        <td> {{ sifat.id}} </td>
                        <td> {{ sifat.kanji}} </td>
                        <td> {{ sifat.romaji}} </td>
                        <td> {{ sifat.arti}} </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
    </div></div>
    <div class="col">
    <div class="container pt-4">
<div class="form-floating mb-1 mt-1 col-3">
    <input class="form-control" id="myInput2" type="text" placeholder="Search..">
    <label>Search</label>
</div>
    <div class="card">
    <div class="card-header"><strong class="h3">Kata Sifat (Na)</strong></div>
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
                    <tbody id="myTable2">
                    <tr v-for="sifat2 in katasifat2" :key="sifat2.id">
                        <td> {{ sifat2.id}} </td>
                        <td> {{ sifat2.kanji}} </td>
                        <td> {{ sifat2.romaji}} </td>
                        <td> {{ sifat2.arti}} </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
    </div></div>
    <div class="col-1"></div>
</div>
</template>