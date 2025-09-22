import React from "react";
import { getProducts } from "@/service/products.service";
import { IProduct } from "@/interfaces/product.interface";

import ProductItem from "@/components/products/productItem";

export default async function ProductPage() {
  const { data: products }: { data: IProduct[] } = await getProducts();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-15">
          {products &&
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
        <div className="text-center"></div>
      </div>
    </section>
  );
}
