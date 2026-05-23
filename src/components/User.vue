<script setup lang="ts">
import type {  UserListProps } from '@/types';
import {  type PropType } from 'vue';



const props = defineProps({
    userData : Object as PropType<UserListProps & {isSelected:boolean}>
})

</script>
<template>
    <div
        class=" p-4 grid grid-cols-[1fr_150px_80px] h-15 border-0 border-b border-b-gray-300"
        :class="{
          'bg-gray-400 text-white font-medium overflow-hidden transition-all delay-100' : props.userData?.isSelected
        }"
    >
    <p>{{  props.userData?.name }}</p>
    <p>{{  props.userData?.age }}</p>
    <p>
      <slot name="action" />
    </p>
  </div>
</template>
<style lang="css" scoped></style>
