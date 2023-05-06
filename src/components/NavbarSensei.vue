<template>
    <div id="App">
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a></li>
        <li class="nav-item">
          <span class="brand-text font-weight h3">LPK YUKIMAGA SURAKARTA</span>
        </li>
      </ul>
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            role="button"
          >
          </a>
        </li>
        <ul class="navbar-nav">
        <!-- <li class="nav-item ">
          <a href="/homeu" class="nav-link">Preview</a>
        </li> -->
        <li class="nav-item d-none d-sm-inline-block">
          <a class="nav-link" @click="logout" href="/">
            Keluar
          </a>
          </li>
      </ul>
      </ul>
    </nav>
    <!-- <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><router-link class="nav-link" to="/homea">LPK YUKIMAGA SURAKARTA</router-link></a>
          <a href="#"></a>
          
      </div>
    </nav> -->
</div>
<SidebarAdminVue/>
</template>
<script>
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';
import SidebarAdmin from './SidebarAdmin.vue';

export default{
    setup(){
        const router = useRoute();
        const logout = () => {
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
        return { logout };
        
      },
      components: { SidebarAdmin }
    };
 
</script>
<style>

</style>