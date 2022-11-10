<script setup>
import {ref, watch} from "vue";
import useCrypter from "@/hooks/useCrypter.js";

const {encrypt, decrypt} = useCrypter();
const text = ref("");
const encryptedText = ref("");

const encryptText = ref("");
const decryptedText = ref("");

watch(text, (value) => {
  encryptedText.value = encrypt(value)
})

watch(encryptText, (value) => {
  decryptedText.value = decrypt(value)
})

</script>

<template>
  <div class="container">
    <main>
      <h4>Plain Text: </h4>
      <textarea v-model="text" placeholder="Enter text here" rows="20" cols="100"></textarea>
      <h4>Encrypted :</h4>
      <textarea v-model="encryptedText" placeholder="Enter text here" rows="20" cols="100"></textarea>
    </main>
    <main>
      <h4>Encrypted Text: </h4>
      <textarea v-model="encryptText" placeholder="Enter text here" rows="20" cols="100"></textarea>
      <h4>Plain Text:</h4>
      <textarea v-model="decryptedText" placeholder="Enter text here" rows="20" cols="100"></textarea>
    </main>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 0 1rem;
}
</style>