export async function getProducts(limit?: number) {
  try {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?limit=${limit}`,
      {
        cache: "no-cache"
    //     next: {
    //       revalidate: 120,
    //       tags: ["products"],
    //     },
      }
    );
    if (!response.ok)
      throw new Error(response.statusText || "Failed to fetch products");

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error as string };
  }
}

//  cache: "no-cache",
//         next: {
//             revalidate: 120,  => we use it to make sure that the data is up to date
//              tags: ["products"]
//         }
