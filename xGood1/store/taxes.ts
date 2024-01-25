// stores/taxeStore.ts

import { defineStore } from "pinia";
import taxeServices from "~/services/taxeServices";

interface State {
  importData: any[]; // Change array type
  exportData: any[];
  outputData: any[];
  baddealData: any[];
  filterStarter: any[];
}

export const myTaxeStore = defineStore("myTaxes", {
  state: (): State => ({
    importData: [], // Initialize as an empty array
    exportData: [],
    outputData: [],
    baddealData: [],
    filterStarter: ["Pumulo", "Thresa", "Gabriel", "Esepu", "Henry", "Dauti"],
  }),

  actions: {
    async fetchImports(this: any): Promise<void> {
      const data: any = await taxeServices.sourceImports(); // Change type
      this.importData.push(data[0]);
    },
    async fetchExports(this: any): Promise<void> {
      const data: any = await taxeServices.sourceExports();
      this.exportData.push(data[0]);
    },
    async fetchOutputs(this: any): Promise<void> {
      const data: any = await taxeServices.sourceOutputs();
      this.outputData.push(data[0]);
    },
    async fetchBadDeals(this: any): Promise<void> {
      const data: any = await taxeServices.sourceBadDeals();
      this.baddealData.push(data[0]);
    },

    // ==========================================================================================

    async addValueToImports(this: any): Promise<void> {
      const data: any = await taxeServices.sourceImports(); // Change type
      this.importData.push(data[0]);
    },
    async addValueToExports(this: any): Promise<void> {
      const data: any = await taxeServices.sourceExports();
      this.exportData.push(data[0]);
    },
    async addValueToOutputs(this: any): Promise<void> {
      const data: any = await taxeServices.sourceOutputs();
      this.outputData.push(data[0]);
    },

    async addValueToBadDeals(this: any): Promise<void> {
      const data: any = await taxeServices.sourceBadDeals();
      this.baddealData.push(data[0]);
    },
  },

  getters: {
    ImportResults: (state: State) => state.importData,
    ExportResults: (state: State) => state.exportData,
    OutputResults: (state: State) => state.outputData,
    BadDealsResults: (state: State) => state.baddealData,
  },
});
