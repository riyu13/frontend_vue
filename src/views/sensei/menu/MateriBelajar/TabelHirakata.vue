<template>
<NavbarSensei/>
<SidebarSensei/>
<div class="container pt-4">
<div class="card">
<div class="form-floating mb-1 mt-1 col-2">
    <input class="form-control" id="hirakata" type="text" placeholder="Search..">
    <label>Search</label>
</div>
            <div class="card">
                <div class="card-header"><strong class="h3">Daftar Hiragana & katakana</strong></div>
                <div class="card-body">
                <table class="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Hiragana</th>
                        <th>Katakana</th>
                        <th>Romaji</th>
                        <th>Opsi</th>
                    </tr>
                    </thead>
                    <tbody id="tablehirakata">
                    <tr v-for="(kana, index) in hirakata" :key="index">
                        <td> {{ kana.id}} </td>
                        <td> {{ kana.hiragana}} </td>
                        <td> {{ kana.katakana}} </td>
                        <td> {{ kana.romaji}} </td>
                    <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal3" @click="edit(kana)"><i class="fas fa-edit"></i></button>
                    <button @click="del(kana)" class="btn btn-danger btn-small"><i class="fas fa-trash"></i></button></td></tr>
                    </tbody>
                </table>
                </div></div>
                 <!-- The Modal -->
            <div class="modal" id="myModal3">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Tabel Hiragana & Katakana</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                    <form @submit.prevent="update(form)">
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="id"  placeholder="Masukkan id" name="id" disabled required>
                        <label for="id">{{ form.id }}</label>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="hiragana" placeholder="Masukkan Nama" name="hiragana" v-model="form.hiragana" required >
                        <label for="hiragana">Hiragana</label>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="katakana" placeholder="Alamat" name="katakana" v-model="form.katakana" required>
                        <label for="katakana">Katakana</label>
                    </div>
                    <div class="row">
                    <div class="col">
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="romaji" placeholder="Alamat" name="romaji" v-model="form.romaji" required>
                        <label for="romaji">Romaji</label>
                    </div>
                </div></div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" class="btn btn-outline-primary btn-lg" v-on:click="alertDisplay">Simpan</button>
                    <button type="reset" class="btn btn-outline-danger btn-lg">Reset</button>
                </div>
              </form></div>
                    <!-- Modal footer -->
                </div>
            </div>
        </div>
       
            </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios'
import $ from 'jquery'
import NavbarSensei from '../../../../components/NavbarSensei.vue';
import SidebarSensei from '../../../../components/SidebarSensei.vue';
export default {
    data() {
        return {
            form: {
                id: "",
                hiragana: "",
                katakana: "",
                romaji: ""
            },
            hirakata: "",
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            axios.get("http://localhost:3000/hirakata").then(res => {
                this.hirakata = res.data;
            }).catch((err) => {
                console.log(err);
            });
        },
        del(kana) {
            Swal.fire({
                title: "Apakah kamu akan menghapusnya?",
                text: "Data akan terhapus selamannya",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete("http://localhost:3000/hirakata/" + kana.id).then(res => {
                        this.load();
                        Swal.fire("Di Hapus!", "Data telah dihapus", "success");
                    });
                }
            });
        },
        edit(kana) {
            this.form.id = kana.id;
            this.form.hiragana = kana.hiragana;
            this.form.katakana = kana.katakana;
            this.form.romaji = kana.romaji;
        },
        update(form) {
            return axios.put("http://localhost:3000/hirakata/" + form.id, { hiragana: this.form.hiragana, katakana: this.form.katakana, romaji: this.form.romaji }).then(res => {
                this.load();
                Swal.fire("Tersimpan!", "Data berhasil diperbarui", "success");
                form.id = "",
                form.hiragana = "",
                form.katakana = "",
                form.romaji = ""
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    components: { NavbarSensei, SidebarSensei }
}

$(document).ready(function(){
    $("#hirakata").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tablehirakata tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

</script>
