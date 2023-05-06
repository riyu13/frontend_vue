<template>
<NavbarSensei/>
<SidebarSensei/>
        <div class="container pt-5">
        <div class="card">
        <div class="card-body">
        <div class="row">
        <div class="col-sm-10">
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#tambahkerja"><i class="fas fa-plus"></i> Tambah</button>
        <br/></div>
        <div class="col">
        <div class="form-floating mt-1 mb-1">
        <input class="form-control" id="katakerja" type="text" placeholder="Search..">
        <label>Search</label>
        </div></div></div>
        <div class="card" >
        <div class="card-header">
            <strong class="h3">Kata kerja</strong></div>
                    <div class="card-body">
                    <table class="table table-striped table-hover" id="myTable">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Kanji</th>
                            <th>Jepang</th>
                            <th>Indonesia</th>
                            <th>Opsi</th>
                        </tr>
                        </thead>
                        <tbody id="tablekatakerja">
                        <tr v-for="(kerja, index) in katakerja" :key="index">
                            <td>{{ kerja.id }}</td>
                            <td>{{ kerja.kanji}}</td>
                            <td>{{ kerja.romaji}}</td>
                            <td>{{ kerja.arti}}</td>
                            <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal3" @click="edit(kerja)"><i class="fas fa-edit"></i></button>
                                <button type="button" class="btn btn-danger" @click="del(kerja)"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                     <!-- The Modal -->
                <div class="modal" id="myModal3">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Ubah Kata Kerja</h4>
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
                            <input type="text" class="form-control" id="kerja" placeholder="Masukkan Nama" name="kerja" v-model="form.kanji" required >
                            <label for="kerja">Kanji</label>
                        </div>
                        <div class="form-floating mb-2 mt-2">
                            <input type="text" class="form-control" id="onyomi" placeholder="Alamat" name="onyomi" v-model="form.romaji" required>
                            <label for="onyomi">Jepang</label>
                        </div>
                        <div class="row">
                        <div class="col">
                        <div class="form-floating mb-2 mt-2">
                            <input type="text" class="form-control" id="arti" placeholder="Alamat" name="arti" v-model="form.arti" required>
                            <label for="arti">Indonesia</label>
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
            <!-- The Modal -->
            <div class="modal" id="tambahkerja">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Tambah kerja N5</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <!-- Modal body -->
                        <div class="modal-body">
                        <form @submit.prevent="add">
                        <div class="form-floating mb-2 mt-2">
                            <input type="text" class="form-control" id="id"  placeholder="Masukkan id" name="id" v-model="form.id" required>
                            <label for="id">ID Kata kerja</label>
                        </div>
                        <div class="form-floating mb-2 mt-2">
                            <input type="text" class="form-control" id="kerja" placeholder="Masukkan Nama" name="kerja" v-model="form.kanji" required >
                            <label for="kerja">Kanji</label>
                        </div>
                        <div class="form-floating mb-2 mt-2">
                            <input type="text" class="form-control" id="onyomi" placeholder="Alamat" name="onyomi" v-model="form.romaji" required>
                            <label for="onyomi">Jepang</label>
                        </div>
                        <div class="row">
                        <div class="col">
                        <div class="form-floating mb-2 mt-2">
                            <input type="text" class="form-control" id="arti" placeholder="Alamat" name="arti" v-model="form.arti" required>
                            <label for="arti">Indonesia</label>
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
            </div></div>
        </div></div>
        </div>
    </template>
    
    <script>
    import axios from 'axios'
    import Swal from 'sweetalert2';
    import $ from 'jquery'
import NavbarSensei from '../../../../components/NavbarSensei.vue';
import SidebarSensei from '../../../../components/SidebarSensei.vue';
     // New record
    export default {
        data() {
            return {
                form: {
                    id: "",
                    kanji: "",
                    romaji: "",
                    arti: ""
                },
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
            },
            add(){
            axios.post('http://localhost:3000/katakerja/', this.form).then(res => {
                this.load()
                Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Data Berhasil Disimpan',
                showConfirmButton: true,
                timer: 1500
                })
            this.form.id = ''
            this.form.kanji = ''
            this.form.romaji = ''
            this.form.arti = ''
          }).catch ((err) => {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Data Gagal Disimpan',
                showConfirmButton: true,
                timer: 1500
            })
          })
        },
            del(kerja) {
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
                        axios.delete("http://localhost:3000/katakerja/" + kerja.id).then(res => {
                            this.load();
                            Swal.fire("Di Hapus!", "Data telah dihapus", "success");
                        });
                    }
                });
            },
            edit(kerja) {
                this.form.id = kerja.id;
                this.form.kanji = kerja.kanji;
                this.form.romaji = kerja.romaji;
                this.form.arti = kerja.arti;
            },
            update(form) {
                return axios.put("http://localhost:3000/katakerja/" + form.id, { kanji: this.form.kanji, romaji: this.form.romaji, arti: this.form.arti }).then(res => {
                    this.load();
                    Swal.fire("Tersimpan!", "Data berhasil diperbarui", "success");
                    form.id = "",
                    form.kanji = "",
                    form.romaji = "",
                    form.arti = "";
                }).catch((err) => {
                    console.log(err);
                });
            }
        },
        components: { NavbarSensei, SidebarSensei }
    }
    
    $(document).ready(function(){
        $("#katakerja").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#tablekatakerja tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    </script>
    <style>
    
    </style>