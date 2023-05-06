<script setup>
import Tahap1 from './biaya/Tahap1.vue';
import Tahap2 from './biaya/Tahap2.vue';
import Tahap3 from './biaya/Tahap3.vue';
import NavbarUser from '../../components/NavbarUser.vue';

</script>
<template>
<NavbarUser/>
    <div class="container p-5">
        <div class="row"></div>
        <div class="row">
        <div class="columns is-dekstop">
            <div class="column"><Tahap1/></div>
            <div class="column"><Tahap2/></div>
            <div class="column"><Tahap3/></div>
            </div></div>
        </div>
        <div class="row"></div>
</template>

<style>
.container{
    height: 100vh;
}
</style>