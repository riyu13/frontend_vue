<template>
<NavbarAdmin/>
<SidebarAdmin/>
<!-- <div class="bg"> -->
<div class="container p-5">
<div class="row">
<div class="col-3"></div>
<div class="col-6">
<form @submit.prevent="add">
    <div class="card">
        <div class="card-header"><h3>Pendaftaran</h3></div>
            <div class="card-body">
                <div class="row">
                <div class="col">
                <div class="form-floating mb-2 mt-2">
                    <input type="number" class="form-control" id="id" v-model="form.id" placeholder="Masukkan id" name="id" required>
                    <label for="id">Id</label>
                </div>
                <div class="form-floating mb-2 mt-2">
                    <input type="text" class="form-control" id="nama" v-model="form.nama" placeholder="Masukkan Nama" name="Nama" required>
                    <label for="nama">Nama</label>
                </div>
                <div class="form-floating mb-2 mt-2">
                    <textarea type="text" class="form-control" id="alamat" v-model="form.alamat" placeholder="Alamat" name="alamat" required></textarea>
                    <label for="alamat">Alamat</label>
                </div>
                <div class="row">
                <div class="col">
                <div class="form-floating mb-2 mt-2">
                    <input type="text" class="form-control" id="tmptlahir" v-model="form.tmptlahir" placeholder="Tempat Lahir" name="tempatl" required>
                    <label for="tempatl">Tempat Lahir</label>
                </div></div>
                <div class="col">
                <div class="form-floating mb-2 mt-2">
                    <input type="date" class="form-control" v-model="form.tgllahir" id="tgllahir" name="tanggall" required>
                    <label for="tanggall">Tanggal Lahir</label>
                </div></div>
                </div></div>
                <div class="col">
                <div class="form-floating mb-2 mt-2">
                    <input type="text" class="form-control" v-model="form.notelp" id="notelp" placeholder="No. Telpon" name="notelp" required>
                    <label for="notelp">No. Telpon</label>
                </div>
                <select name="jkel" class="form-select mb-2 mt-2" v-model="form.jkel" required>
                    <option selected>Jenis Kelamin</option>
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                </select>
                <select name="id_status" class="form-select" v-model="form.id_status" required>
                    <option selected>Pilih Materi</option>
                    <option value="2">Materi belajar 1</option>
                    <option value="3">Materi belajar 2</option>
                    <option value="4">Materi belajar 3</option>
                </select>
                <div class="row">
                <div class="col">
                <div class="form-floating mb-2 mt-2">
                    <input type="text" class="form-control" v-model="form.email" id="email" placeholder="email" name="email" required>
                    <label for="email">Email</label>
                </div></div>
                <div class="col">
                <div class="form-floating mb-2 mt-2">
                    <input type="password" class="form-control" v-model="form.pwd" id="password" placeholder="password" name="password" required>
                    <label for="password">Password</label>
                </div></div></div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" class="btn btn-outline-primary btn-lg" v-on:click="alertDisplay">Simpan</button>
                <button type="reset" class="btn btn-outline-danger btn-lg">Reset</button>
            </div></div>
        </div>
    </div>
</form></div>
<div class="col"></div></div>
</div>
<!-- </div> -->
</template>
<script>
import NavbarAdmin from '../../components/NavbarAdmin.vue';
import SidebarAdmin from '../../components/SidebarAdmin.vue';
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data(){
    return{
        form: {
          id: '',
          nama: '',
        },
        users: '',
        updateSubmit: false
    }
  },
  methods: {
    add(){
        axios.post('http://localhost:3000/users/', this.form).then(res => {
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data Berhasil Disimpan',
            showConfirmButton: true,
            timer: 1500
            })
        this.form.id = ''
        this.form.nama = ''
        this.form.alamat = ''
        this.form.tmptlahir = ''
        this.form.tgllahir = ''
        this.form.notelp = ''
        this.form.jkel = ''
        this.form.email = ''
        this.form.pwd = ''
        this.form.id_status = ''
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
},
components: { NavbarAdmin, SidebarAdmin }
}

</script>


<style>
.container{
    width: 100%;
    height: 100vh;
}
h1{
    font-weight: bolder;
}
.bg{
    background: rgba(26, 48, 72, 0.524);
}
</style>