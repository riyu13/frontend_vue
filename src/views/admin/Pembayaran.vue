<template>
<div class="container p-5">
    <div class="row">
    <div class="col">
    <div class="card">
        <div class="card-header">
            <div class="h3">Pembayaran</div>
        </div>
        <div class="card-body">
            <form @submit.prevent="add">
                <div class="row">
                <div class="card w-50">
                  <div class="row">
                <div class="col">
                <div class="mb-3 mt-3">
                <label class="form-label">ID Pembayaran :</label>
                    <input type="number" class="form-control" id="id_pembayaran" v-model="form.id_pembayaran"/>
                </div>
                <div class="mb-3 mt-3">
                <label class="form-label">Tanggal :</label>
                    <input type="date" class="form-control" id="tglbayar" v-model="form.tglbayar"/>
                </div></div>
                <div class="col">
                <div class="mb-3 mt-3">
                <label class="form-label">Keterangan :</label>
                <select name="id_status" class="form-select" v-model="form.id_status" required>
                    <option selected>Pilih Materi</option>
                    <option value="2">Materi belajar 1</option>
                    <option value="3">Materi belajar 2</option>
                    <option value="4">Materi belajar 3</option>
                </select>
                </div>
                <div class="mb-3 mt-3">
                <label class="form-label">Nominal :</label>
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Rp.</span>
                </div>
                <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="nominal" v-model="form.nominal">
                </div></div></div></div></div>
                <div class="card w-50">
                <div class="col">
                <div class="mb-3 mt-3">
                <label class="form-label">ID Peserta :</label>
                    <input type="number" class="form-control" id="id_users" v-model="form.id_users"/>
                </div>
                <label class="form-label">Nama Peserta :</label>
                <input type="text" class="form-control" id="id_users"/>
                </div></div></div>
                <button type="submit" class="btn btn-outline-primary " v-on:click="alertDisplay">Simpan</button>
                <button type="reset" class="btn btn-outline-danger" v-on:click="alertDisplay">Reset</button>
            </form>
        </div>
        <div class="col">
    <div class="card">
    <div class="card-header">Riwayat Transaksi</div>
    <div class="card-body">
        <table>
            <thead>
                <tr>
                    <td>No. </td>
                    <td>Id Pembayaran</td>
                    <td>Tanggal</td>
                    <td>Keterangan</td>
                    <td>Nominal</td>
                    <td>Id Peserta</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(bayar, index) in pembayaran" :key="index">
                    <td> {{ index + 1 }}</td>
                    <td> {{bayar.id_pembayaran}}</td>
                    <td> {{bayar.tglbayar}}</td>
                    <td>{{bayar.keterangan}}</td>
                    <td>{{bayar.nominal}}</td>
                    <td>{{bayar.id_users}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div></div>
    </div></div>
    </div></div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data(){
    return{
        form: {
          id_pembayaran: '',
          tglbayar: '',
          keterangan: '',
          nominal: '',
          id_users: ''
        },
        pembayaran: '',
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/pembayaran').then(res => {
        this.pembayaran = res.data
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
        axios.post('http://localhost:3000/pembayaran/', this.form).then(res => {
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data Berhasil Disimpan',
            showConfirmButton: true,
            timer: 1500
            })
            this.load()
        this.form.id_pembayaran = '',
        this.form.tglbayar = '',
        this.form.keterangan = '',
        this.form.nominal = '',
        this.form.id_users = ''
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
    del(pembayaran){
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
          axios.delete('http://localhost:3000/pembayaran/' + form.id_pembayaran).then(res =>{
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
    edit(pembayaran){
      this.form.id_pembayaran = pembayaran.id_pembayaran
      this.form.tglbayar = pembayaran.tglbayar
      this.form.keterangan = pembayaran.keterangan
      this.form.nominal = pembayaran.nominal
      this.form.id_users = pembayaran.id_users
    },
    update(form){
        return axios.put('http://localhost:3000/pembayaran/' + form.id_pembayaran , { tglbayar :this.form.tglbayar, keterangan: this.form.keterangan, nominal: this.form.nominal, id_users: this.form.id_users  }).then(res => {
          this.load()
          Swal.fire(
            'Tersimpan!',
            'Data berhasil diperbarui',
            'success'
          )
      }).catch((err) => {
        console.log(err);
        
      })
    }
  },
}
</script>