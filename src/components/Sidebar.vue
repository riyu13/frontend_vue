<script setup>
import Sidebar1 from './sidebar/sidebar1.vue';
import Sidebar2 from './sidebar/sidebar2.vue';
import Sidebar3 from './sidebar/sidebar3.vue';

</script>
<template>
<div class="offcanvas offcanvas-end" id="demo">
  <div class="offcanvas-header">
    <div class="user-panel mt-3">
        <img src="../assets/302995624_424832079630979_7744371774240802423_n.jpg" class="rounded-circle" width="100" height="100">
    </div>
  </div>
  <div class="offcanvas-body">
  <div class="accordion accordion-flush" id="accordionExample">
  <Sidebar1/>
  <Sidebar2/>
  <Sidebar3/>
  </div>
  </div>
</div>
</template>