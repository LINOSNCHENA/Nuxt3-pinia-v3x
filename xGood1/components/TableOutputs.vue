<template>
  <div>
    <v-data-table-virtual
      :headers="outputHeaders"
      :items="outputs"
      :items-per-page="5"
      height="800"
      class="uppercase-headers table"
    >
      <template v-slot:[`header.body`]="{ column }">
        <td>{{ column }}</td>
      </template>

      <template v-slot:item="{ item, index }">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address.city }}</td>
          <td>{{ item.address.zipcode }}</td>
          <td>{{ Object.keys(item).length }}</td>
        </tr>
      </template>
    </v-data-table-virtual>
    <p>Total output elements: {{ outputs.length }}</p>
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { myTaxeStore } from "~/store/taxes";

interface OutputItem {
  id: number;
  name: string;
  username: number;
  email: number;
  address: number;
  zipcode: number;
  height: number;
}
const store = myTaxeStore();
const state = reactive({
  outputs: store.outputData || ([] as OutputItem[]),
});
const outputs = state.outputs;
const outputHeaders = ref([
  { title: "Index", color: "lightblue", key: "index" },
  { title: "Id", color: "lightblue", key: "id" },
  { title: "NameX", class: "my-header-style", key: "name" },
  { title: "UserNameX", class: "my-header-style", key: "username" },
  { title: "EmailX", class: "my-header-style", key: "email" },
  { title: "Address", color: "lightblue", key: "address" },
  { title: "ZipCode", color: "lightblue", key: "zipcode" },
  { title: "Total-X", color: "lightblue", key: "height" },
]);
//====================================================

onMounted(() => {
  fetchOutput();
});
const fetchOutput = async (): Promise<void> => {
  try {
    await store.fetchOutputs();
  } catch (error) {
    console.error("Error fetching output data:", error);
  }
};
</script>

<style scoped lang="scss">
.table {
  background-color: rgb(190, 128, 144);
}

h2 {
  color: #333;
}
</style>
