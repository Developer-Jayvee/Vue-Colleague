import { colleagues } from "@/constants";
import type { UserListProps } from "@/types";
import { computed, ref } from "vue";

export default function useColleagues() {
  const availableColleagues = ref<UserListProps[]>([]);
  const selectedColleagues = ref<UserListProps[]>([]);
  const colleagueForm = ref<Omit<UserListProps,"id">>({
    name:"",
    age:0
  });
  
  const canSubmit = computed( () => colleagueForm.value.age != 0 && colleagueForm.value.name.trim() != "");
  const computedUserList = computed(() => {
    return availableColleagues.value.map( (items) => {
      const isSelected = selectedColleagues.value.some( (data) => data.id === items.id);
      return {
        ...items,
        isSelected
      }
    })
    // .sort((a, b) => {
    //   return Number(a.isSelected) - Number(b.isSelected);
    // });
  });
  const computedSelectedList = computed(() => selectedColleagues.value.sort((a,b) => b.id - a.id));
  const availColleaguesCount = computed(() => computedUserList.value.filter( (item) => !item.isSelected).length);
  const selectedColleaguesCount = computed(
    () => selectedColleagues.value.length,
  );

  const getUserList = () => {
    availableColleagues.value = colleagues.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
  };

  const selectUserFromList = (id: number) => {
    const action = confirm("Are you sure you want to add this user?");
    if (!action) return;
    const userData = availableColleagues.value.find( (data) => data.id === id);
    if(userData){
      selectedColleagues.value.push(userData);
    }
  };
  const removeFromSelectedList = (id : number) => {
    const action = confirm("Are you sure you want to remove this user?");
    if(!action) return;
    selectedColleagues.value = selectedColleagues.value.filter( (data) => data.id !== id);
  }
  const handleFormFields = (key : keyof Omit<UserListProps,"id"> , value : string | number ) => {
      colleagueForm.value = {
        ...colleagueForm.value,
        [key] : value
      }
  }
  const handleSubmit = (e : Event) => {
    const action = confirm("Are you sure you want to submit?");
    if(!action ) return;
    if(!canSubmit.value) return;
    
    availableColleagues.value = [
      { ...colleagueForm.value , id: availableColleagues.value.length + 1},
      ...availableColleagues.value
    ]
    
    Object.assign(colleagueForm.value, { name : "" , age : 0});
  }
  return {
    availableColleagues,
    selectedColleagues,
    computedUserList,
    computedSelectedList,
    availColleaguesCount,
    selectedColleaguesCount,
    colleagueForm,
    getUserList,
    selectUserFromList,
    removeFromSelectedList,
    handleFormFields,
    handleSubmit,
  };
}
