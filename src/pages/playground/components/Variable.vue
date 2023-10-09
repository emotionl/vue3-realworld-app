<script setup lang="ts">
const text = ref('Hello World')
const arr = ref([1, 2, 3, 4, 5])
const obj = ref({
  a: 1,
  b: 2,
  c: 3
})
</script>

<template>
  <div>{{ text }}</div>
  <ol>
    Loop Array
    <li v-for="(item, index) in arr" :key="item">
      index: {{ index }} : item: {{ item }}
    </li>
  </ol>
  <ul>
    Loop Object
    <li v-for="(item, key) in obj" :key="key">
      {{ key }} : {{ item }}
    </li>
  </ul>
</template>
