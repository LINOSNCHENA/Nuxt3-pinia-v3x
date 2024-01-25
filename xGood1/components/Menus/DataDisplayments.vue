<template>
  <div>
    <v-responsive class="mx-auto" max-width="394">
      <v-text-field v-model="inputVal" width="140" clearable label="Enter export name" variant="outlined"></v-text-field>
      <v-btn class="text-white" block color="success" size="large" type="submit" variant="elevated"
        @click="handleButtonClick()">
        <span> + Add each four elements </span>
      </v-btn>
    </v-responsive>
    ========================|MEMBERS-OF-STAFFS|===========

    <br />
    {{ imports.length }}
    <br />
    {{ exportx.length }}
    <br />
    {{ outputs.length }}
    <br />
    {{ bads.length }}
    <br />
    {{ filterStarter }}
    <br />

    ========================|MEMBERS-OF-STAFFS|===========

  </div>
</template>

<script lang="ts" setup>
import { myTaxeStore } from "~/store/taxes";
import { storeToRefs } from "pinia";

const inputVal = ref("");
const filtersStore = myTaxeStore();

const { addValueToImports } = filtersStore;
const { addValueToOutputs } = filtersStore;
const { addValueToBadDeals } = filtersStore;
const { addValueToExports } = filtersStore;

const { filterStarter } = storeToRefs(filtersStore);

const handleButtonClick = () => {
  addValueToImports();
  addValueToExports();
  addValueToOutputs();
  addValueToBadDeals();
};

const imports = computed(() => filtersStore.ImportResults);
const exportx = computed(() => filtersStore.ExportResults);
const outputs = computed(() => filtersStore.OutputResults);
const bads = computed(() => filtersStore.BadDealsResults);

</script>
