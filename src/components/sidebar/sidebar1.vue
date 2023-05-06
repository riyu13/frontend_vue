<template>
<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Materi Belajar 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/hiragana" class="nav-link">Hiragana & Katakana</router-link></a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/kanji" class="nav-link">Kanji Dasar</router-link></a>
            <!-- <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/latihan1" class="nav-link">Latihan</router-link></a> -->
          </div>
      </div>
    </div>
  </div>

</template>