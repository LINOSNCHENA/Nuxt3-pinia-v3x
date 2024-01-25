// services/taxeService.ts

export default {
  async sourceImports(): Promise<any> {
    try {
      const response = await fetch("https://testapi.jasonwatmore.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch imports");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching imports:", error);
      throw error;
    }
  },
  async sourceExports(): Promise<any> {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch exports");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching exports:", error);
      throw error;
    }
  },

  // ===================================================================================================||
  async sourceOutputs(): Promise<any> {
    try {
      const response = await await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch outputs");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching outputs:", error);
      throw error;
    }
  },

  async sourceBadDeals(): Promise<any> {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch bad-deals");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching bad-deals:", error);
      throw error;
    }
  },
};
