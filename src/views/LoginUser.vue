<script setup>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const email = ref("");
const password = ref("");

const userLogin = () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((data) => console.log(data))
    .catch((err) => alert(err.message));
};
</script>

<template>
  <div class="login">
    <form @submit.prevent="userLogin">
      <h2>Let's login</h2>
      <input type="text" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <input type="submit" value="login" />
      <p>
        No Account yet?<router-link to="/register">register here!</router-link>
      </p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  text-align: center;
  form {
    height: 520px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 30%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
    form * {
      font-family: "Poppins", sans-serif;
      color: #ffffff;
      letter-spacing: 0.5px;
      outline: none;
      border: none;
    }
    h2 {
      font-size: 32px;
      font-weight: 500;
      line-height: 42px;
      text-align: center;
    }
    input[type="text"],
    input[type="password"] {
      display: block;
      height: 50px;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.07);
      border-radius: 3px;
      padding: 0 10px;
      margin-top: 8px;
      font-size: 14px;
      font-weight: 300;
    }
    input[type="submit"] {
      margin-top: 50px;
      width: 100%;
      background-color: #ffffff;
      color: #080710;
      padding: 15px 0;
      font-size: 18px;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
