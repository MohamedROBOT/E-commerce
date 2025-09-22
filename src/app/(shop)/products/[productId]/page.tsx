import { IProduct } from "@/interfaces/product.interface";
import { getProductDetail } from "@/service/productdetail.service";

import ProductDetailsClient from "../../../../components/products/ProductDetailsClient";

export default async function ProductDetails({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const { data: product }: { data: IProduct } = await getProductDetail(
    productId
  );

  return <ProductDetailsClient product={product} />;
}
