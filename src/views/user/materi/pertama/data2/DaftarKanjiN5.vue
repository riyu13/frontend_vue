<template>
<NavbarUser/>
<div class="container pt-5">
<div class="form-floating mb-1 mt-1 col-2">
    <input class="form-control" id="myInput" type="text" placeholder="Search..">
    <label>Search</label>
</div>
    <div class="card">
    <div class="card-header"><strong class="h3">Kanji Dasar N5</strong></div>
                <div class="card-body">
                <table class="table table-striped table-hover" id="example">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Kanji</th>
                        <th>On-yomi</th>
                        <th>Kun-yomi</th>
                        <th>Arti</th>
                    </tr>
                    </thead>
                    <tbody id="myTable">
                    <tr v-for="kanji in kanjin5" :key="kanji.id">
                        <td> {{ kanji.id}} </td>
                        <td> {{ kanji.kanji}} </td>
                        <td> {{ kanji.onyomi}} </td>
                        <td> {{ kanji.kunyomi}} </td>
                        <td> {{ kanji.arti}} </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
        kanjin5: '',
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/kanjin5').then(res => {
        this.kanjin5 = res.data
      }).catch ((err) => {
        console.log(err);
      })
    }}
}
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

</script>