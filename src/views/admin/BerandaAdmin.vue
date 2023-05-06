<template>
    <div class="wrapper">
    <navbar-admin/>
    <SidebarAdmin/>
    <div class="content">
    <div class="container-fluid mt-3">
        <Pembayaran/>
    </div></div>
</div>
</template>
<script setup>
import NavbarAdmin from '../../components/NavbarAdmin.vue';
import SidebarAdmin from '../../components/SidebarAdmin.vue';
import Pembayaran from './Pembayaran.vue';

</script>

<style></style>