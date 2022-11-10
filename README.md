# short-crypter

This template should help get you started developing with Vue 3 in Vite.

## Dependencies

- [Vue](https://vuejs.org) : This library is directly depended on Vue3

## Installation

> npm

```bash
npm i short-crypter
```

> yarn

```bash
yarn add short-crypter
```

## Basic Usage

``js

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
``

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
