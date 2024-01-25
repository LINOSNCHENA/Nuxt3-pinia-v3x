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
          <td>{{ item.url }}</td>
          <td>{{ item.thumbnailUrl }}</td>
          <td>{{ item.albumId }}</td>
          <td>{{ Object.keys(item).length }}</td>
        </tr>
      </template>
    </v-data-table-virtual>
    <p>Total export elements : {{ outputs.length }}</p>
    <br />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { myTaxeStore } from "~/store/taxes";

interface ExportItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
  height: number;
  name: string;
};
const store = myTaxeStore();
const state = reactive({
  exported: store.exportData || ([] as ExportItem[]),
});
const outputs = state.exported;
const outputHeaders = ref([
  { title: "Index", color: "lightblue", key: "index" },
  { title: "Id", color: "lightblue", key: "id" },
  { title: "TitleX", class: "my-header-style", key: "title" },
  { title: "URL", color: "lightblue", key: "url" },
  { title: "ThumbNail", color: "lightblue", key: "thumbnailUrl" },
  { title: "AlbumId", color: "lightblue", key: "albumId" },
  { title: "Total-X", color: "lightblue", key: "total" },
]);

//====================================================

onMounted(() => {
  fetchOutput();
});
const fetchOutput = async (): Promise<void> => {
  await store.fetchExports();
};
</script>

<style scoped lang="scss">
.table {
  background-color: rgb(177, 221, 209);
}
</style>
