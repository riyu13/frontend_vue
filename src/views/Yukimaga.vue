<template>
    <div v-if="error" class="alert alert-danger" role="alert">
    {{ error }}
    </div>
    <div class="container h-100">
        <div class="login_name_wrapper">
            <div class="d-flex justify-content-center">LPK YUKIMAGA SURAKARTA</div>
        </div>
    <div class="d-flex justify-content-center h-50" >
        <div class="user_card">
            <div class="d-flex justify-content-center">
                <div class="login_logo_container"> <img src="src\assets\302995624_424832079630979_7744371774240802423_n.jpg" class="login_logo" alt="Logo"> </div>
            </div>
            <div class="d-flex justify-content-center form_container">
                <div style="width: 320px">
                    <div class="d-flex justify-content-center mt-3 login_container">
                        <router-link to="/login" tag="button"><button type="button" class="btn btn-primary btn-lg btn-block btn-ymg">Administrator</button></router-link>
                    </div>
                    <div class="d-flex justify-content-center mt-3 login_container">
                        <router-link to="/loginsensei" tag="button"><button type="button" class="btn btn-primary btn-lg btn-block btn-ymg">Sensei</button></router-link>
                    </div>
                    <div class="d-flex justify-content-center mt-3 login_container">
                        <router-link to="/loginuser" tag="button"><button type="button" class="btn btn-primary btn-lg btn-block btn-ymg">Peserta Magang</button></router-link>
                    </div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>

<style>
.btn-ymg{
    width: 8cm;
}
body {
    background-color: #e4e4e4;
    background-image: linear-gradient(to bottom, #233588, #233588 300px, #e4e4e4 300px, #e4e4e4)!important;
    background-size: cover!important;
    background-repeat: no-repeat!important;
}
html, body {
    margin: 0;
    height: 100%;
}

.user_card {
    height: 400px;
    width: 400px;
    margin-top: auto;
    margin-bottom: auto;
    background: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
}
.login_name_wrapper {
    height: 20%!important;
    min-height: 200px;
    margin-bottom: auto;
    margin-top: auto;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #FFF;
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
}
.login_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #233588;
    padding: 10px;
    text-align: center;
}
.login_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.form_container {
    margin-top: 100px;
}
.login_btn {
    width: 100%;
    background: #233588 !important;
    color: white !important;
}
.login_btn:hover {
    background: #2c44b0!important;
}

.login_container {
    padding: 0 2rem;
}
.input-group-text {
    background: #233588 !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user, .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    background-color: #233588 !important;
}
.input-group-text {
    height: 38px;
}
</style>