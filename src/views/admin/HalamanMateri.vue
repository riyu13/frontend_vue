<script setup>
import NavbarAdmin from '../../components/NavbarAdmin.vue';
import SidebarAdmin from '../../components/SidebarAdmin.vue';


</script>
<template>
<NavbarAdmin/>
<SidebarAdmin/>
    <div class="container pt-5">
        <div class="row"></div>
        <div class="row">
            <div class="col">
                <div class="card h-100 w-100">
                    <div class="card-header"><h4>Materi Belajar 1</h4></div>
                    <div class="card-body"><p>Pengaturan huruf jepang yaitu hiragana(ひらがな) dan katakana(カタカナ) dan Kanji Dasar N5</p>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Materi Belajar 1
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/tabelhirakata" class="nav-link">Hiragana & Katakana</router-link></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/kanjiadmin" class="nav-link">Kanji Dasar</router-link></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 w-100">
                    <div class="card-header"><h4>Materi Belajar 2</h4></div>
                    <div class="card-body"><p>Menambah, mengubah dan menghapus kosakata dalam bahasa jepang untuk JLPT N5</p>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/katabendaadmin" class="nav-link">Kata Benda</router-link></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/katakerjaadmin" class="nav-link">Kata Kerja</router-link></a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-light"><router-link to="/katasifatadmin" class="nav-link">Kata Sifat</router-link></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row"></div>
    </div>
</template>