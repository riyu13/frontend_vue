<template>
    <NavbarAdmin/>    
    <SidebarAdmin/>
        <div class="container pt-5">
        <div class="card">
        <div class="card-body">
        <div class="row">
        <div class="col-sm-10">
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#tambahbenda"><i class="fas fa-plus"></i> Tambah</button>
        <br/></div>
        <div class="col">
        <div class="form-floating mt-1 mb-1">
        <input class="form-control" id="katabenda" type="text" placeholder="Search..">
        <label>Search</label>
        </div></div></div>
        <div class="card" >
        <div class="card-header">
            <strong class="h3">Kata Benda</strong></div>
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
                        <tbody id="tablekatabenda">
                        <tr v-for="(benda, index) in katabenda" :key="index">
                            <td>{{ benda.id }}</td>
                            <td>{{ benda.kanji}}</td>
                            <td>{{ benda.romaji}}</td>
                            <td>{{ benda.arti}}</td>
                            <td>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal3" @click="edit(benda)"><i class="fas fa-edit"></i></button>
                                <button type="button" class="btn btn-danger" @click="del(benda)"><i class="fas fa-trash"></i></button>
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
                            <h4 class="modal-title">Ubah Kata Benda</h4>
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
                            <input type="text" class="form-control" id="benda" placeholder="Masukkan Nama" name="benda" v-model="form.kanji" required >
                            <label for="benda">Kanji</label>
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
            <div class="modal" id="tambahbenda">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <!-- Modal Header -->
                        <div class="modal-header">
                            <h4 class="modal-title">Tambah benda N5</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <!-- Modal body -->
                        <div class="modal-body">
                        <form @submit.prevent="add">
                        <div class="form-floating mb-2 mt-2">
                            <input type="text" class="form-control" id="id"  placeholder="Masukkan id" name="id" v-model="form.id" required>
                            <label for="id">ID Kata Benda</label>
                        </div>
                        <div class="form-floating mb-2 mt-2">
                            <input type="text" class="form-control" id="benda" placeholder="Masukkan Nama" name="benda" v-model="form.kanji" required >
                            <label for="benda">Kanji</label>
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
    import SidebarAdmin from '../../../../components/SidebarAdmin.vue';
    import NavbarAdmin from '../../../../components/NavbarAdmin.vue';
    import axios from 'axios'
    import Swal from 'sweetalert2';
    import $ from 'jquery'
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
            },
            add(){
            axios.post('http://localhost:3000/katabenda/', this.form).then(res => {
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
            del(benda) {
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
                        axios.delete("http://localhost:3000/katabenda/" + benda.id).then(res => {
                            this.load();
                            Swal.fire("Di Hapus!", "Data telah dihapus", "success");
                        });
                    }
                });
            },
            edit(benda) {
                this.form.id = benda.id;
                this.form.kanji = benda.kanji;
                this.form.romaji = benda.romaji;
                this.form.arti = benda.arti;
            },
            update(form) {
                return axios.put("http://localhost:3000/katabenda/" + form.id, { kanji: this.form.kanji, romaji: this.form.romaji, arti: this.form.arti }).then(res => {
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
        components: { SidebarAdmin, NavbarAdmin }
    }
    
    $(document).ready(function(){
        $("#katabenda").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#tablekatabenda tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    </script>
    <style>
    
    </style>