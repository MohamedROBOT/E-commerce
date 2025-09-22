"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import {
  removeSpecificItem,
  removeUserCart,
  updateQuantityCart,
} from "@/service/cart.service";
import { toast } from "sonner";

export default function CartPage() {
  const { cartDetails, setCartDetails } = useCart();
  async function removeCartItems() {
    const response = await removeUserCart();
    if (response?.message === "success") {
      toast.success("Cart is removed");
      setCartDetails(null);
    } else {
      toast.error(response?.message || "Something went wrong");
    }
  }

  async function deleteProductFromCart(productId: string) {
    const response = await removeSpecificItem(productId);
    if (response.success) {
      toast.success("Product is removed");
      setCartDetails(response.data);
    } else {
      toast.error(response?.message || "Something went wrong");
    }
  }
  async function updateQtyCart(productId: string, count: number) {
    const response = await updateQuantityCart(productId, count);
    if (response.success) {
      toast.success(response.message);
      setCartDetails(response.data);
    } else {
      toast.error(response?.message || "Something went wrong");
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {cartDetails?.numOfCartItems ? (
          <>
            <div className="mb-20">
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Subtotal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cartDetails?.data?.products?.length ? (
                    cartDetails.data.products.map((product) => (
                      <TableRow key={product._id}>
                        <TableCell>
                          <div className="flex gap-5  items-center">
                            <div className="relative">
                              <Badge
                                onClick={() =>
                                  deleteProductFromCart(product.product._id)
                                }
                                className="cursor-pointer absolute -top-0.5 -start-0.5 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                                variant="destructive"
                              >
                                <X />
                              </Badge>
                              <Image
                                alt={product.product.title}
                                width={54}
                                height={54}
                                src={product.product.imageCover}
                              ></Image>
                            </div>
                            <h2>{product.product.title}</h2>
                          </div>
                        </TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                          <div className="flex gap-4 items-center">
                            <Button
                              onClick={() =>
                                updateQtyCart(
                                  product.product._id,
                                  product.count + 1
                                )
                              }
                              size={"sm"}
                              variant={"outline"}
                              className="hover:text-white hover:bg-muted-foreground"
                            >
                              +
                            </Button>
                            {product.count}
                            <Button
                              onClick={() =>
                                updateQtyCart(
                                  product.product._id,
                                  product.count - 1
                                )
                              }
                              size={"sm"}
                              variant={"outline"}
                              className="hover:text-white hover:bg-muted-foreground"
                            >
                              -
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>{product.count * product.price}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell>No products in cart</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <div className="flex justify-between">
                <Button variant={"outline"}>
                  <Link href={"/products"}>Return To Shop</Link>
                </Button>
                {cartDetails?.data?.products?.length ? (
                  <Button onClick={removeCartItems} variant={"destructive"}>
                    {" "}
                    Remove All{" "}
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-y-3 justify-between">
              <div className="flex items-center gap-x-4 md:w-5/12">
                <Input placeholder="Coupon Code" />
                <Button variant={"destructive"}>Apply Coupon</Button>
              </div>
              <div className=" md:w-5/12 py-8 px-6 border border-gray-950">
                <h3 className="font-bold mb-6 text-xl">Cart Total</h3>
                <ul className="divide-y divide-gray-950">
                  <li className="py-6 flex justify-between">
                    <span>Subtotal:</span>{" "}
                    <span>{cartDetails?.data?.totalCartPrice}</span>
                  </li>
                  <li className="py-6 flex justify-between">
                    <span>Shipping:</span> <span>Free</span>
                  </li>
                  <li className="py-6 flex justify-between">
                    <span>Total:</span>{" "}
                    <span>{cartDetails?.data?.totalCartPrice}</span>
                  </li>
                </ul>
                <div className="flex justify-center items-center">
                  <Button asChild variant={"destructive"}>
                    <Link href={"/checkout"}>Proceed to checkout</Link>
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen text-2xl font-semibold">
            Cart is empty{" "}
            <Button variant={"destructive"}>
              <Link href={"/products"}>Return To Shop</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
