<script setup>
import NavbarUser from "../../../../components/NavbarUser.vue";
import Sidebar5 from "./componenside/sidebar5.vue";

</script>
<template>
<NavbarUser/>
<div class="container pt-4">
    <div class="card">
        <div class="card-header"><label class="h3">Tata Bahasa N5</label></div>
        <div class="card-body">
            <div class="columns">
                <div class="column is-one-fifth">  
                    <Sidebar5/>                
                </div> 
                <div class="column">
                    <div class="card">
                        <div class="card-body">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style></style>