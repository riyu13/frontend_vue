<script setup>
import NavbarAdmin from "../../../../components/NavbarAdmin.vue";
import SidebarAdmin from "../../../../components/SidebarAdmin.vue";
import Sidebar5 from "../../../user/materi/ketiga/componenside/sidebar5.vue";

</script>
<template>
<NavbarAdmin/>
<SidebarAdmin/>
<div class="container pt-3">
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