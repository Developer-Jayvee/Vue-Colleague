<template>
  <div
    class="flex flex-col gap-3 p-3 w-full border border-gray-300 shadow-md rounded-md"
  >
    <div>
      <h1 class="font-medium text-lg">Add a colleague to my list</h1>
    </div>
    <div>
        <form @submit.prevent="(e) => emit('submit',e)" class="grid grid-cols-[1fr_200px_200px] gap-x-2">
            <div class="flex flex-col">
                <input type="text" placeholder="Name" :value="model?.name" @keyup="(e) => handleInput(e,'name')" />
            </div>
            <div class="flex flex-col">
                <input type="number" placeholder="Age" @keyup="(e) => handleInput(e,'age')" :value="model?.age"/>
            </div>
            <div class="">
                <button type="submit" class="p-3 bg-green-700 hover:bg-green-800 text-white rounded-md">
                  Add to My Colleagues
                </button>
            </div>
        </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserListProps } from '@/types';

const handleInput = (e: Event , key : keyof Omit<UserListProps,"id">) => {
    const { value }  = e.target as HTMLInputElement;
    emit('change',key,value);
}

const emit = defineEmits<{
    (e: 'change', key : keyof Omit<UserListProps,"id"> ,value : string | number) : void;
    (e: 'submit' , event : Event) : void;
}>();

const model = defineModel<Omit<UserListProps,"id">>();

</script>

<style scoped></style>
