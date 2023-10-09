<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'update', count: number): void
}>()

function changeCount(step: number) {
  emit('update', props.count + step)
}
</script>

<template>
  count: {{ count }}
  <button @click="changeCount(1)">
    Add
  </button>
  <button @click="changeCount(-1)">
    Minus
  </button>
</template>
