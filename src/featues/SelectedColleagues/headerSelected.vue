<template>
  <div class="flex items-center justify-between px-2 border-0 bg-yellow-200">
    <div class="flex gap-2 items-center">
      <div class="w-7">
        <UserGroupIcon  class="text-black"/>
      </div>
      <p class="font-semibold text-black">My Colleagues</p>
    </div>
    <div class="bg-yellow-600 text-white font-semibold text-md rounded-lg px-2 py-1">
      <span>{{  props.count }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserGroupIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  count : Number
})

</script>

<style scoped></style>
