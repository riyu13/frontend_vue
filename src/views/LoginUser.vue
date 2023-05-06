<template>
    <div v-if="error" class="alert alert-danger" role="alert">
    {{ error }}
    </div>
    <div class="container h-100">
        <div class="login_name_wrapper">
            <div class="d-flex justify-content-center">LOGIN USER</div>
        </div>
    <div class="d-flex justify-content-center h-50" >
        <div class="user_card">
            <div class="d-flex justify-content-center">
                <div class="login_logo_container"> <img src="src\assets\302995624_424832079630979_7744371774240802423_n.jpg" class="login_logo" alt="Logo"> </div>
            </div>
            <div class="d-flex justify-content-center form_container">
                <form style="width: 320px" @submit.prevent="handleSubmit">
                    <div id="msgcont" class="d-flex justify-content-center" style="display:none!important">
                        <div id="msg" class="alert alert-danger py-1 px-2" role="alert"></div>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="text" class="form-control" id="email" placeholder="email" name="email" v-model="email" required>
                        <label for="email">Email</label>
                    </div>
                    <div class="form-floating mb-2 mt-2">
                        <input type="password" class="form-control" id="password" placeholder="password" name="password" v-model="pwd" required>
                        <label for="password">Password</label></div>
                    <div class="d-flex justify-content-center mt-3 login_container">
                        <button v-on:click="login" class="btn login_btn"><a href="/Homeu" class="nav-link">Login</a></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { useRouter } from 'vue-router';
// export default{
//     setup(){
//         const router = useRouter();
//         const login = () => {
//             localStorage.setItem('authenticated', true)
//             router.push({ name: 'Homeu'})
//         }
//         return { login }
//     }}
</script>

<style>
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