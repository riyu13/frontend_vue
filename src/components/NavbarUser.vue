<template>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><RouterLink to="/homeu" class="nav-link" data-bs-toggle="tooltip" title="Beranda">LPK YUKIMAGA SURAKARTA</RouterLink></a>
  </div>
  <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
    <font-awesome-icon icon="fa-solid fa-book" />
  </button>
  <button class="btn btn-light" @click="logout2"><a href="/" class="nav-link">
    Keluar</a>
  </button>
</nav>
<Sidebar/>
</template>
<script setup>
import Sidebar from './Sidebar.vue';</script>
<style>
.container{
  height: 100vh;
}
</style>
<script>
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';

export default{
    setup(){
        const router = useRoute();
        const logout2 = () => {
          Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Aplikasi telah di logout',
              showConfirmButton: true,
              timer: 1500
            })
            localStorage.setItem('authenticated', false);
            router.push({ name: 'Login'});
        };
        return { logout2 };
        
    },
};
</script>