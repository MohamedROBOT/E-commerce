import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { getProducts } from "@/service/products.service";
import { IProduct } from "@/interfaces/product.interface";

import { Button } from "../ui/button";
import Link from "next/link";
import ProductItem from "../products/productItem";

export default async function ProductComponent() {
  const { data: products }: { data: IProduct[] } = await getProducts(8);

  

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <SectionTitle
          title={"Our Products"}
          subtitle={"Explore Our Products"}
        />
        <div className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-15">
          {products &&
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
        <div className="text-center">
          <Button asChild variant={"destructive"}>
            <Link href={"/products"}>View All Products</Link>
          </Button>{" "}
        </div>
      </div>
    </section>
  );
}
