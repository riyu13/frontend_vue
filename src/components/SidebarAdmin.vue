<script setup>
import Sidebarberanda from './sidebaradmin/sidebarberanda.vue';
// import SidebarKontak from './sidebaradmin/SidebarKontak.vue';
import SidebarPesertaMagang from './sidebaradmin/SidebarPesertaMagang.vue';
import SidebarSensei from './sidebaradmin/SidebarSensei.vue';


</script>
<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
   <div class="sidebar">
     <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <a href="/homea">
       <label class="h5 text-light">Gilang Firza Rivanka</label></a>
     </div>

     <div class="form-inline">
       
     </div>
     <nav class="mt-2">
       <ul
         class="nav nav-pills nav-sidebar flex-column"
         data-widget="treeview"
         role="menu"
         data-accordion="false"
       >
         <Sidebarberanda/>
         <SidebarSensei/>
         <SidebarPesertaMagang/>
         <li class="nav-item">
           <a href="#" class="nav-link">
            <i class="nav-icon fas fa-swatchbook"></i>
             <p>
               Materi Belajar
               <i class="fas fa-angle-left right"></i>
             </p>
           </a>
           <ul class="nav nav-treeview">
             <li class="nav-item">
               <a href="/adminlte/UI/general.html" class="nav-link">
                <i class="nav-icon fas fa-book"></i>
             <p>
               Materi Belajar 1
               <i class="fas fa-angle-left right"></i>
             </p>
               </a>
               <ul class="nav nav-treeview">
                <li class="nav-item">
               <RouterLink to="/tabelhirakata" class="nav-link">
                <i class="nav-icon"></i>
                 <p>Tabel Hiragana & Katakana</p>
               </RouterLink>
             </li>
             <li class="nav-item">
               <RouterLink to="/kanjiadmin" class="nav-link">
                 <i class="nav-icon"></i>
                 <p>Tabel Kanji N5</p>
               </RouterLink>
             </li>
               </ul>
             </li>
             <li class="nav-item">
               <a href="/adminlte/UI/general.html" class="nav-link">
                <i class="nav-icon fas fa-book"></i>
             <p>Materi Belajar 2<i class="fas fa-angle-left right"></i>
             </p></a>
             <ul class="nav nav-treeview">
                <li class="nav-item">
               <RouterLink to="/katabendaadmin" class="nav-link">
                 <i class="nav-icon"></i>
                 <p>Tabel Kata Benda</p>
               </RouterLink>
             </li>
             <li class="nav-item">
               <RouterLink to="/katakerjaadmin" class="nav-link">
                 <i class="nav-icon"></i>
                 <p>Tabel Kata Kerja</p>
               </RouterLink>
             </li>
             <li class="nav-item">
               <RouterLink to="/katasifatadmin" class="nav-link">
                 <i class="nav-icon"></i>
                 <p>Tabel Kata Sifat Ikeyoushi</p>
               </RouterLink>
             </li>
             <li class="nav-item">
               <RouterLink to="/katasifat2admin" class="nav-link">
                 <i class="nav-icon"></i>
                 <p>Tabel Kata Sifat Nakeiyoushi</p>
               </RouterLink>
             </li>
               </ul>
             </li>
             <!-- <li class="nav-item">
               <RouterLink to="/materin5admin" class="nav-link">
                 <i class="far fa-circle nav-icon"></i>
                 <p>Materi Belajar 3</p>
               </RouterLink>
             </li> -->
           </ul>
         </li>
         <!-- <SidebarKontak/> -->
         </ul>
     </nav>
   </div>
 </aside>
</template>