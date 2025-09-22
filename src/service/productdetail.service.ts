
export async function getProductDetail(id : string) {
try {
  const response =  await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, {
    cache:"no-cache"
  })

  if(!response.ok) {
    throw new Error(response.statusText || "Failed to fetch products");
  }
  const data = await response.json();
  return data
} catch (error) {
    return {error: error as string}
}
}