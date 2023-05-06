<template>
<div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Materi Belajar 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link class="nav-link" to="/katabenda">Kata Benda(名詞 | めいし)</router-link> </a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/katakerja" class="nav-link">Kata Kerja(動詞 | どうし)</router-link> </a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/katasifat" class="nav-link">Kata Sifat(形容詞 | けいようし)</router-link> </a>
            <!-- <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/latihan2" class="nav-link">Latihan</router-link></a> -->
          </div>
      </div>
    </div>
  </div>
</template>