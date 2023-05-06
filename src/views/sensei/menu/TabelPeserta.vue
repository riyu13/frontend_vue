<template>
<NavbarSensei/>
<SidebarSensei/>
<div class="container pt-5">
<div class="card">
<div class="card-body">
<div class="row">
<div class="col-sm-10">
<!-- <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal4"><i class="fas fa-user-plus"></i> Tambah</button> -->
<br/></div>
<div class="col">
    <div class="form-floating mt-1">
    <input class="form-control" id="users" type="text" placeholder="Search..">
    <label>Search</label>
    </div></div>
</div>
<div class="card mb-3 mt-1">
<div class="card-header"><h3 class="text-center">Data Peserta Magang</h3></div>
<div class="card-body">
<table id="myTable" class="table table-striped table-hover">
<thead>
<tr>
    <td>No</td>
    <td>ID</td>
    <td>Nama</td>
    <td>Alamat</td>
    <td>Tempat Lahir</td>
    <td>Tanggal Lahir</td>
    <td>No. Telpon</td>
    <td>Jenis Kelamin</td>
    <td>Email</td>
    <td>Status</td>
    <!-- <td>Opsi</td> -->
</tr>
</thead>
<tbody id="tableusers" >
<tr v-for="(user, index) in users" :key="index">
    <td>{{ index + 1}}</td>
    <td>{{ user.id }}</td>
    <td>{{ user.nama }}</td>
    <td>{{ user.alamat }}</td>
    <td>{{ user.tmptlahir }}</td>
    <td>{{ user.tgllahir }}</td>
    <td>{{ user.notelp }}</td>
    <td>{{ user.jkel }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.id_status }}</td>
    <!-- <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal3" @click="edit(user)"><i class="fas fa-edit"></i></button>
        <button @click="del(user)" class="btn btn-danger btn-small"><i class="fas fa-trash"></i></button></td> -->
</tr></tbody>
</table></div>
</div></div></div>
    <!-- The Modal -->
    <div class="modal" id="myModal3">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Ubah Data Peserta Magang</h4>
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
                </div>
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
                </div></div>
            </div>
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
   <div class="modal" id="myModal4">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Tambah Peserta Magang</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
    <form @submit.prevent="add">
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
            </div>
</form></div>
                <!-- Modal footer -->
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import $ from 'jquery'
import SidebarSensei from '../../../components/SidebarSensei.vue';
import NavbarSensei from '../../../components/NavbarSensei.vue';
export default {
  data(){
    return{
        form: {
          id: '',
          nama: '',
          alamat: '',
          tmptlahir:'',
          tgllahir:'',
          notelp:'',
          jkel:'',
          email:'',
          pwd:'',
          id_status:''
        },
        users: '',
        page: 1
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/users').then(res => {
        this.users = res.data
      }).catch ((err) => {
        console.log(err);
      })
    },
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
    del(user){
      Swal.fire({
        title: 'Apakah kamu akan menghapusnya?',
        text: "Data akan terhapus selamannya",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete('http://localhost:3000/users/' + user.id).then(res =>{
          this.load()
          Swal.fire(
            'Di Hapus!',
            'Data telah dihapus',
            'success'
          )
      })
      } 
      })
    },
    edit(user){
      this.form.id = user.id
      this.form.nama = user.nama
      this.form.alamat = user.alamat
      this.form.tmptlahir = user.tmptlahir
      this.form.tgllahir = user.tgllahir
      this.form.notelp = user.notelp
      this.form.jkel = user.jkel
      this.form.email = user.email
      this.form.pwd = user.pwd
      this.form.id_status = user.id_status
    },
    update(form){
        return axios.put('http://localhost:3000/users/' + form.id , {nama: this.form.nama, alamat: this.form.alamat, tmptlahir: this.form.tmptlahir, tgllahir: this.form.tgllahir, notelp: this.form.notelp, jkel: this.form.jkel, email: this.form.email, pwd: this.form.pwd, id_status: this.form.id_status  }).then(res => {
          this.load()
          Swal.fire(
            'Tersimpan!',
            'Data berhasil diperbarui',
            'success'
          )
          form.id = '',
          form.nama = '',
          form.alamat = '',
          form.tmptlahir = '',
          form.tgllahir = '',
          form.notelp = '',
          form.jkel = '',
          form.email = '',
          form.pwd = '',
          form.id_status = ''
      }).catch((err) => {
        console.log(err);
        
      })
    }
  },
  components: { SidebarSensei, NavbarSensei }
}
$(document).ready(function(){
    $("#users").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#tableusers tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
</script>

<style>
.container{
    height: 100vh;
}
</style>