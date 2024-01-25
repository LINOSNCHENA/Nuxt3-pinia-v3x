<template>
  <div>
    <v-responsive class="mx-auto" max-width="394">
      <v-btn @click="fetchData" class="text-white" block color="blue" size="large" type="submit" max-width="200"
        variant="elevated"> Search - Queue an Import-Order</v-btn>
    </v-responsive>

    =============================================================================================================
    <ul>
      <li v-for="(filter, i) in dataOutputed" :key="filter">
        {{ doubleDigitIndex(i + 1) }} - {{ filter }}
      </li>

    </ul>
    =============================================================================================================
    <p v-if="dataOutputed">
      Total outputed elements : {{ dataOutputed.length }}
    </p>
    =============================================================================================================
    <br>
  </div>
</template>

<script setup lang="ts">
import { myTaxeStore } from "~/store/taxes";

const store = myTaxeStore();

const fetchData = async (): Promise<void> => {
  
  await store.fetchImports();
  await store.fetchExports();
  await store.fetchOutputs();
  await store.fetchBadDeals();
};

const doubleDigitIndex = (index: string | any) => {
  return index < 10 ? "0" + index : index;
};
const dataOutputed = store.importData;
</script>
