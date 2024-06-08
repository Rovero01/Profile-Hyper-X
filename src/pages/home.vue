<script setup lang="ts">
import { constants } from '@/constatns/constants'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import Opener from '@/components/opener.vue'

const { opener, topbar } = storeToRefs(useCounterStore())
const { setTrue } = useCounterStore()

console.log(opener.value)

setTimeout(() => {
  setTrue(constants.opener)
}, 2000)
</script>

<template>
  <div>asd</div>
</template>
