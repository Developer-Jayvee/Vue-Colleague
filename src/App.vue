<script setup lang="ts">
import Card from "./components/Card.vue";
import Table from "./components/Table.vue";
import { onMounted, provide } from "vue";
import HeaderAvailable from "./featues/AvailableColleagues/headerAvailable.vue";
import type { ProvideActionProps } from "./types";
import ContentAvailable from "./featues/AvailableColleagues/contentAvailable.vue";
import HeaderSelected from "./featues/SelectedColleagues/headerSelected.vue";
import ContentSelected from "./featues/SelectedColleagues/contentSelected.vue";
import useColleagues from "./composables/useColleagues";
import FormColleague from "./featues/NewColleague/formColleague.vue";


const {
  availableColleagues,
  computedSelectedList,
  computedUserList,
  getUserList,
  selectUserFromList,
  availColleaguesCount,
  selectedColleaguesCount,
  removeFromSelectedList,
  handleFormFields,
  handleSubmit,
  colleagueForm
} = useColleagues()


provide("actions",<ProvideActionProps>{
  add : selectUserFromList,
  remove : removeFromSelectedList
});

onMounted(() => {
  getUserList();
});
</script>

<template>
  <div class="h-screen w-full flex justify-center items-center">
    <div class="grid grid-cols-2 gap-x-10 gap-y-5 bg-white shadow-2xl p-7 border border-gray-300">
      <Card>
        <template #header>
          <HeaderAvailable :count="availColleaguesCount"/>
        </template>
        <template #table>
          <Table>
            <template #content>
                <ContentAvailable :user-list="computedUserList"/>
            </template>
          </Table>
        </template>
      </Card>
      
      <Card>
          <template #header>
            <HeaderSelected :count="selectedColleaguesCount"/>
          </template>
          <template #table>
            <Table>
              <template #content>
                <ContentSelected :user-list="computedSelectedList"/>
              </template>
            </Table>
          </template>
      </Card>

      <div class="col-span-2">
        <FormColleague v-model="colleagueForm"   @change="handleFormFields" @submit="handleSubmit"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
