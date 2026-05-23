<script setup lang="ts">
import { UserGroupIcon } from "@heroicons/vue/24/outline";
import User from "./User.vue";

const props = defineProps({});
</script>
<template>
  <div class="w-full h-screen grid grid-cols-1 grid-rows-[50px_1fr]">
    <div
      class="p-4 grid grid-cols-[1fr_150px_80px] border-0 border-b border-b-gray-500 place-items-center justify-items-start"
    >
      <p class="text-gray-500 font-semibold">Name</p>
      <p class="text-gray-500 font-semibold">Age</p>
      <p class="text-gray-500 font-semibold"></p>
    </div>

    <div class="h-full min-h-0">
      <div class="min-h-0 h-75">
        <div class="min-h-0  h-full overflow-y-auto overflow-x-hidden ">
          <slot name="content"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
