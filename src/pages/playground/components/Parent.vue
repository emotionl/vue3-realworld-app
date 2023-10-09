<script setup lang="ts">
import Child from './Child.vue'

const count = ref(0)
function update(nextCount: number) {
  count.value = nextCount
}
</script>

<template>
  <Child :count="count" @update="update" />
</template>
