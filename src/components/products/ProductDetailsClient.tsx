"use client";
import { renderStars } from "@/components/shared/review";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import React, { useState } from "react";
import { Heart, RefreshCcw, TruckIcon } from "lucide-react";
import AddtoCartBtn from "./AddtoCartBtn";

export default function ProductDetailsClient({
  product,
}: {
  product: IProduct;
}) {
  const [mainImg, setMainImg] = useState(product.imageCover);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2 mx-auto flex gap-x-10  items-center ">
            <div>
              <div className="flex flex-col gap-3">
                {product.images.map((image) => {
                  return (
                    <Image
                      onClick={() => setMainImg(image)}
                      className="size-24 cursor-pointer"
                      key={image}
                      src={image}
                      alt={product.title}
                      width={100}
                      height={100}
                    ></Image>
                  );
                })}
              </div>
            </div>
            <picture>
              <Image
                src={mainImg}
                alt={product.title}
                width={500}
                height={500}
              ></Image>
            </picture>
          </div>
          <div className="lg:col-span-1 ">
            <h1 className="font-semibold text-2xl mb-4">{product.title}</h1>
            <div className="mb-4 flex justify-start gap-3 items-center text-2xl">
              {renderStars(product.ratingsAverage)}
              <span className="text-sm font-semibold text-gray-500">
                ({product.ratingsQuantity}) reviews
              </span>
            </div>

            <span className="text-2xl mb-6 block text-red-500">
              {product.price} EGP
            </span>

            <p className="text-sm mb-6 pb-6 border-b border-gray-500 ">
              {product.description}
            </p>

            <div className="flex mb-6 flex-row gap-x-8 justify-between items-center ">
              <AddtoCartBtn
                className="flex-grow-1"
                variant={"destructive"}
                productId={product._id}
              />
              <div className="border rounded py-1.5 px-2.5">
                <Heart width={20} />
              </div>
            </div>

            <div className="">
              <div className="flex border p-3 gap-x-5 flex-row justify-between items-center">
                <TruckIcon className="size-8" />
                <div className="flex-grow-1">
                  <p className="font-semibold mb-2.5">Free Delivery</p>
                  <p className="text-sm">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="flex border p-3 gap-x-5 flex-row justify-between items-center">
                <RefreshCcw className="size-8" />
                <div className="flex-grow-1">
                  <p className="font-semibold mb-2.5">Free Delivery</p>
                  <p className="text-sm">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
