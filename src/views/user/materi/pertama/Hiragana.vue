<script setup>
import NavbarUser from "../../../../components/NavbarUser.vue";
import Hiraganadb from "./data/hiraganadb.vue";
import KatakanaDB from "./data/KatakanaDB.vue";
</script>

<template>
<NavbarUser/>
<div class="container pt-5">
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-header"><strong><h3>Hiragana</h3></strong></div>
                <div class="card-body">
                <Hiraganadb/></div></div>
        </div>
        <div class="col">
          <div class="card">
                <div class="card-header"><strong><h3>Katakana</h3></strong></div>
                <div class="card-body">
                <KatakanaDB/>
            </div></div>
        </div>
    </div>
</div>
</template>
<style>
.card{
  width: 100%;
}

.flip-card {
  background-color: transparent;
  width: 100%;
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
  background-color: #ffffff;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #f2efea;
  color: rgb(0, 0, 0);
  transform: rotateY(180deg);
}
</style>