
  export async function getCategories() {
    try {
      const response = await fetch(
        "https://ecommerce.routemisr.com/api/v1/categories", {
          cache: "no-cache"
        }
        
      );

      if (!response.ok)
        throw new Error(response.statusText || "Failed to fetch categories");

      const data = await response.json();

      return data;
    } catch (error) {
      return { error: error as string };
    }
  }