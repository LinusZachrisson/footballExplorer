import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8_5INkAILgNVAlSyS_XUv9EheQ5w3Fjw",
  authDomain: "footballexplorer-53c90.firebaseapp.com",
  projectId: "footballexplorer-53c90",
  storageBucket: "footballexplorer-53c90.appspot.com",
  messagingSenderId: "793006169398",
  appId: "1:793006169398:web:6f66593e035fe069d3e797",
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
