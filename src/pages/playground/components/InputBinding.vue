<script setup lang="ts">
const valueWithModel = ref('')
const valueWithoutModel = ref('')

function updateValueWithoutModel(e: Event) {
  valueWithoutModel.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <div>
    Two Way Binding : <input v-model="valueWithModel">
    {{ valueWithModel }}<br>
    Non Two Way Binding : <input :value="valueWithoutModel" @input="updateValueWithoutModel">
    {{ valueWithoutModel }}
  </div>
</template>
