"use client";
import React from "react";
import { Button } from "../ui/button";
import { addToCart } from "@/service/cart.service";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";

export default function AddtoCartBtn({
  productId,
  ...props
}: { productId: string ;

  [key: string]: string
} ) {


    const {setCartDetails, getCartDetails} = useCart()
    console.log(setCartDetails);
  async function addProductToCart(productId: string) {
    const response = await addToCart(productId);

    if (response?.success) {
      toast.success(response.message, {
        position: "top-center",
      });
      getCartDetails()
    }else {
    toast.error(response?.message || "Something went wrong", {
      position: "top-center",
    });
  }
  } 
  return (
    <Button onClick={() => addProductToCart(productId)} {...props}>
      Add to Cart
    </Button>
  );
}
