<script setup>
import KatakanaDB from "./data/KatakanaDB.vue";

</script>
<template>
<div class="container">
    <div class="row">
        <div class="col"></div>
        <div class="colx">
            <div class="card">
                <div class="card-header"><strong><h1>Katakana</h1></strong></div>
                <KatakanaDB/>
            </div>
        </div>
        <div class="col"></div>
    </div>
</div>
</template>
<style>
.colx{
    width: 28,1%;
}
    
.container{
    padding-top: 5%;
}
    
.flip-card {
    background-color: transparent;
    width: 50px;
    height: 50px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
    
    /* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}
    
    /* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
    
    /* Position the front and back side */
.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
}
    
    /* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}
    
    /* Style the back side */
.flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
}
</style>