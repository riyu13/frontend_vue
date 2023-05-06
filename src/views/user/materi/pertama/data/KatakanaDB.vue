<template>
    <div class="row">
        <div class="col1" v-for="kana in hirakata">
            <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <h1><strong>{{ kana.katakana }}</strong></h1>
                </div>
                <div class="flip-card-back">
                <h1><strong>{{ kana.romaji }}</strong></h1>
                </div>
            </div>
            </div>
            </div>
    </div>
    </template>
    <script>
    import axios from 'axios'
    export default {
      data(){
        return{
            hirakata: '',
        }
      },
      mounted() {
        this.load()
      },
      methods: {
        load(){
            axios.get('http://localhost:3000/hirakata').then(res => {
            this.hirakata = res.data
          }).catch ((err) => {
            console.log(err);
          })
        }}
    }
    </script>
    <style>
    .row1{
      width: 500px;
      height: 550px;
    }
    .col1{
      width: 20%;
      height: 20%;
    }
    </style>