<script setup lang="ts">
import User from "@/components/User.vue";
import type { ProvideActionProps, UserListProps } from "@/types";
import { TrashIcon } from "@heroicons/vue/16/solid";
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
  <TransitionGroup name="list" tag="div">
    <User
      v-for="(data, key) in props.userList"
      :key="key"
      :user-data="data"
    >
      <template #action>
         <button
          @click="methods?.remove(data.id)"
          class="rounded-md px-4 py-1 text-2xl hover:bg-red-700  bg-red-600"
        >
          <TrashIcon class="w-5 text-white"/>
        </button>
      </template>
    </User>
  </TransitionGroup>
</template>


<style scoped></style>
