<script setup lang="ts">
import { UserGroupIcon } from '@heroicons/vue/24/outline';
import Table from './Table.vue';

const props = defineProps({
     name : {
        type:String,
        default : ""
     },
});

</script>
<template>
  <div
    class="grid grid-cols-1 grid-rows-[80px_1fr] h-112.5 w-150 overflow-hidden border border-gray-300 rounded-2xl shadow-md"
  >
  <slot name="header"></slot>
   
    <div class="">
       <slot name="table"></slot>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
