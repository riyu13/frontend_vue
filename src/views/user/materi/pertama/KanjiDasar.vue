<script setup>
import NavbarUser from "../../../../components/NavbarUser.vue";
import DaftarKanjiN5 from "./data2/DaftarKanjiN5.vue";

</script>
<template>
<NavbarUser/>
<div class="container pt-4">
<DaftarKanjiN5/>
</div>

</template>
<style>
.flip-card2 {
    background-color: transparent;
    width: auto;
    height: 75px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
    
    /* This container is needed to position the front and back side */
.flip-card2-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
    
    /* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card2:hover .flip-card2-inner {
    transform: rotateY(180deg);
}
    
    /* Position the front and back side */
.flip-card2-front, .flip-card2-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}
    
    /* Style the front side (fallback if image is missing) */
.flip-card2-front {
    background-color: #d8d7d1;
    color: black;
}
    
    /* Style the back side */
.flip-card2-back {
    background-color: #f2efea;
    color: white;
    transform: rotateY(180deg);
}
</style>