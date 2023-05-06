<template>
<NavbarAdmin/>    
<SidebarAdmin/>
    <div class="container pt-5">
    <div class="card">
    <div class="card-body">
    <div class="row">
    <div class="col-sm-10">
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#tambahkanji"><i class="fas fa-plus"></i> Tambah</button>
    <br/></div>
    <div class="col">
    <div class="form-floating mt-1 mb-1">
    <input class="form-control" id="kanjin5" type="text" placeholder="Search..">
    <label>Search</label>
    </div></div></div>
    <div class="card" >
    <div class="card-header">
        <strong class="h3">Kanji Dasar N5</strong></div>
                <div class="card-body">
                <table class="table table-striped table-hover" id="myTable">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Kanji</th>
                        <th>On-yomi</th>
                        <th>Kun-yomi</th>
                        <th>Arti</th>
                        <th>Opsi</th>
                    </tr>
                    </thead>
                    <tbody id="tablekanjin5">
                    <tr v-for="(kanji, index) in kanjin5" :key="index">
                        <td>{{ kanji.id }}</td>
                        <td>{{ kanji.kanji}}</td>
                        <td>{{ kanji.onyomi}}</td>
                        <td>{{ kanji.kunyomi}}</td>
                        <td>{{ kanji.arti}}</td>
                        <td>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal3" @click="edit(kanji)"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn btn-danger" @click="del(kanji)"><i class="fas fa-trash"></i></button>
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
                        <h4 class="modal-title">Ubah Data kanji N5</h4>
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
                        <input type="text" class="form-control" id="kanji" placeholder="Masukkan Nama" name="kanji" v-model="form.kanji" required >
                        <label for="kanji">Kanji</label>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="onyomi" placeholder="Alamat" name="onyomi" v-model="form.onyomi" required>
                        <label for="onyomi">Onyomi</label>
                    </div>
                    <div class="row">
                    <div class="col">
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="kunyomi" placeholder="kunyomi" name="kunyomi" v-model="form.kunyomi" required>
                        <label for="kunyomi">Kunyomi</label>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="arti" placeholder="Alamat" name="arti" v-model="form.arti" required>
                        <label for="arti">Arti</label>
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
        <div class="modal" id="tambahkanji">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Tambah kanji N5</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                    <form @submit.prevent="add">
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="id"  placeholder="Masukkan id" name="id" v-model="form.id" required>
                        <label for="id">ID Kanji</label>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="kanji" placeholder="Masukkan Nama" name="kanji" v-model="form.kanji" required >
                        <label for="kanji">Kanji</label>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="onyomi" placeholder="Alamat" name="onyomi" v-model="form.onyomi" required>
                        <label for="onyomi">Onyomi</label>
                    </div>
                    <div class="row">
                    <div class="col">
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="kunyomi" placeholder="kunyomi" name="kunyomi" v-model="form.kunyomi" required>
                        <label for="kunyomi">Kunyomi</label>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="arti" placeholder="Alamat" name="arti" v-model="form.arti" required>
                        <label for="arti">Arti</label>
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
                onyomi: "",
                kunyomi: "",
                arti: ""
            },
            kanjin5: "",
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            axios.get("http://localhost:3000/kanjin5").then(res => {
                this.kanjin5 = res.data;
                // $('#myTable').DataTable({
                //     data: res.data,
                //     columns:[
                //         { data: "id" },
                //         { data: "kanji" },
                //         { data: "onyomi" },
                //         { data: "kunyomi"},
                //         { data: "arti" },
                //     ]
                // })
            }).catch((err) => {
                console.log(err);
            });
        },
        add(){
        axios.post('http://localhost:3000/kanjin5/', this.form).then(res => {
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
        this.form.onyomi = ''
        this.form.kunyomi = ''
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
        del(kanji) {
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
                    axios.delete("http://localhost:3000/kanjin5/" + kanji.id).then(res => {
                        this.load();
                        Swal.fire("Di Hapus!", "Data telah dihapus", "success");
                    });
                }
            });
        },
        edit(kanji) {
            this.form.id = kanji.id;
            this.form.kanji = kanji.kanji;
            this.form.onyomi = kanji.onyomi;
            this.form.kunyomi = kanji.kunyomi;
            this.form.arti = kanji.arti;
        },
        update(form) {
            return axios.put("http://localhost:3000/kanjin5/" + form.id, { kanji: this.form.kanji, onyomi: this.form.onyomi, kunyomi: this.form.kunyomi, arti: this.form.arti }).then(res => {
                this.load();
                Swal.fire("Tersimpan!", "Data berhasil diperbarui", "success");
                form.id = "",
                    form.kanji = "",
                    form.onyomi = "",
                    form.kunyomi = "",
                    form.arti = "";
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    components: { SidebarAdmin, NavbarAdmin }
}

$(document).ready(function(){
    $("#kanjin5").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tablekanjin5 tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
</script>
<style>

</style>