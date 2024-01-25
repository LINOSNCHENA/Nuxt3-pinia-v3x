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
          <td>{{ item.title }}</td>
          <td>{{ item.completed }}</td>
          <td>{{ item.userId }}</td>
          <td>{{ Object.keys(item).length }}</td>
        </tr>
      </template>
    </v-data-table-virtual>
    <p v-if="outputs">Total baddeals elements : {{ outputs.length }}</p>
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { myTaxeStore } from "~/store/taxes";
import { type BadDealItem } from "~/types/interfaces";

const store = myTaxeStore();
const state = reactive({
  badDeals: store.baddealData || ([] as BadDealItem[]),
});
const outputs = state.badDeals;
const outputHeaders = ref([
  { title: "Index", color: "lightblue", key: "index" },
  { title: "Id", color: "lightblue", key: "id" },
  { title: "Title", color: "lightblue", key: "title" },
  { title: "Completed", color: "lightblue", key: "completed" },
  { title: "UserIdX", class: "my-header-style", key: "userid" },
  { title: "Total-X", color: "lightblue", key: "height" },
]);

//====================================================
onMounted(() => {
  fetchOutput();
});
const fetchOutput = async (): Promise<void> => {
  await store.fetchBadDeals();
};
</script>

<style scoped lang="scss">
.table {
  background-color: rgb(151, 151, 178);
}
</style>
