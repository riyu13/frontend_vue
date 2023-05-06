<template>
<div class="accordion-item">
    <p class="menu-label accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Ungkapan waktu / kejadian
      </button>
    </p>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <ul class="menu-list accordion-body">
        <li><a><router-link to="/materin5/Materi21" class="nav-link">Koto Ga Aru(Pernah)</router-link></a></li>
        <li><a><router-link to="/materin5/Materi22" class="nav-link">Te iru/Te Imasu(Sedang Melakukan)</router-link></a></li>
        <li><a><router-link to="/materin5/Materi23" class="nav-link">Mada ~Te Imasen(Masih Belum Melakukan)</router-link></a></li>
      </ul>
    </div>
  </div>
</template>