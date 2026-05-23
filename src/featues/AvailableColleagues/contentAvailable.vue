<script setup lang="ts">
import User from "@/components/User.vue";
import type { ProvideActionProps, UserListProps } from "@/types";
import { inject, type PropType } from "vue";

type SelectUserList  = UserListProps & {
  isSelected : boolean;
}
const props = defineProps({
    userList :  Array as PropType<SelectUserList[]>
})

const methods = inject<ProvideActionProps>('actions');

</script>
<template>
  <transition-group name="list" tag="div">
    <User
      v-for="(data) in props.userList"
      :key="data.id"
      :user-data="data"
    >
    <template #action>
       <button
          @click="methods?.add(data.id)"
          :disabled="data.isSelected"
          class="rounded-md px-4 py-1 cursor-pointer disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-700 text-sm bg-blue-600 text-white font-semibold"
        >
          Add
        </button>
    </template>
    </User>
  </transition-group>
</template>


<style scoped></style>
