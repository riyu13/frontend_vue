<script setup>
import SidebarPesertaMagang from './sidebarsensei/SidebarPesertaMagang.vue';


</script>
<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
   <div class="sidebar">
     <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <a href="/homes">
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
               <RouterLink to="/tabelhirakata2" class="nav-link">
                <i class="nav-icon"></i>
                 <p>Tabel Hiragana & Katakana</p>
               </RouterLink>
             </li>
             <li class="nav-item">
               <RouterLink to="/kanjiadmin2" class="nav-link">
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
               <RouterLink to="/katabendaadmin2" class="nav-link">
                 <i class="nav-icon"></i>
                 <p>Tabel Kata Benda</p>
               </RouterLink>
             </li>
             <li class="nav-item">
               <RouterLink to="/katakerjaadmin2" class="nav-link">
                 <i class="nav-icon"></i>
                 <p>Tabel Kata Kerja</p>
               </RouterLink>
             </li>
             <li class="nav-item">
               <RouterLink to="/katasifatadmin2" class="nav-link">
                 <i class="nav-icon"></i>
                 <p>Tabel Kata Sifat</p>
               </RouterLink>
             </li>
               </ul>
              </li>
           </ul>
         </li>
         <!-- <SidebarKontak/> -->
         </ul>
     </nav>
   </div>
 </aside>
</template>