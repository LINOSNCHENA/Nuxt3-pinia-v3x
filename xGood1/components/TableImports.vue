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
          <td>{{ item }}</td>
          <td>{{ Object.keys(item).length }}</td>
        </tr>
      </template>
    </v-data-table-virtual>
    <p>Total import elements : {{ outputs.length }}</p>
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { myTaxeStore } from "~/store/taxes";

interface ImportItem {
  id: number;
  name: string;
  size: number;
  height: number;
}
const store = myTaxeStore();
const state = reactive({
  imported: store.outputData || ([] as ImportItem[]),
});
const outputs = state.imported;
const outputHeaders = ref([
  { title: "Index", color: "lightblue", key: "index" },
  { title: "ID", color: "lightblue", key: "id" },
  { title: "NameX", class: "my-header-style", key: "month" },
  { title: "ObjectX", color: "lightblue", key: "size" },
  { title: "Total", color: "lightblue", key: "height" },
]);

//====================================================

onMounted(() => {
  fetchOutput();
});
const fetchOutput = async (): Promise<void> => {
  await store.fetchImports();
};
</script>

<style scoped lang="scss">
.table {
  background-color: rgb(73, 132, 92);
}
</style>
