<script setup lang="ts">
const count = ref(0)
function changeCount(step: number) {
  count.value += step
}
</script>

<template>
  <div>
    <span>Count: {{ count }}</span>
    <button @click="changeCount(1)">
      Add
    </button>
    <button @click="changeCount(-1)">
      Minus
    </button>
  </div>
</template>
