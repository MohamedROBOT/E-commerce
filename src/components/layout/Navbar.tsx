"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {  HeartIcon, MenuIcon, ShoppingCart, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { Badge } from "../ui/badge";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { data: session, status } = useSession();
  const links = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/products",
      label: "Products",
    },
    {
      path: "/categories",
      label: "Categories",
    },
    {
      path: "/brands",
      label: "Brands",
    },
  ];
  const { cartDetails }  = useCart();


  const currPath = usePathname();
  return (
    <section className="py-8 border-b border-gray">
      <div className="container mx-auto ">
        <nav className="flex  items-center justify-between">
          <Link href={"/"} className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter">
              Exclusive
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem key={link.path}>
                  <Link
                    href={link.path}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      currPath === link.path && "bg-gray-200 p-2 rounded"
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            {status === "loading" ? (
              <>Loading...</>
            ) : status === "unauthenticated" ? (
              <>
                <Button variant="outline" asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign up</Link>
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link className="relative" href={"/wishlist"}>
                  <Badge
                    className="absolute -top-1/2 -end-1/4 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                    variant="destructive"
                  >
                    1
                  </Badge>
                  <HeartIcon  className="size-8" />
                </Link>
                <Link className="relative" href={"/cart"}>
                
                 
                    {cartDetails && <Badge
                    className="absolute -top-1/2 -end-1/4 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                    variant="destructive"
                  >
                    {cartDetails?.numOfCartItems}
                  </Badge> 
                    
                  }
                 
                    <ShoppingCart  className="size-8" />
                  
                </Link>
               
                 
                    
                 <DropdownMenu>
  <DropdownMenuTrigger><User className="size-8" /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem asChild><Link href={`/profile`}>Profile</Link></DropdownMenuItem>
    <DropdownMenuItem  onClick={() => signOut({ callbackUrl: "/" })}
                  >Sign out</DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu>
               
              
                
              </div>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button className="cursor-pointer" variant="outline" size="icon">
                <MenuIcon className="h-4 w-4 " />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href={"/"}
                    className="flex items-center max-w-fit gap-2"
                  >
                    <span className="text-lg font-semibold tracking-tighter">
                      Exclusive
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {links.map((link) => {
                    return (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={cn(
                          "font-medium",
                          currPath === link.path &&
                            "bg-gray-200 p-2 rounded max-w-fit"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  {status === "loading" ? (
                    <>Loading...</>
                  ) : status === "unauthenticated" ? (
                    <>
                      <Button variant="outline" asChild>
                        <Link href="/login">Sign in</Link>
                      </Button>
                      <Button asChild>
                        <Link href="/register">Sign up</Link>
                      </Button>
                    </>
                  ) : (
              <div className="flex items-center justify-around gap-4">
                <Link className="relative" href={"/wishlist"}>
                  <Badge
                    className="absolute -top-1/2 -end-1/4 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                    variant="destructive"
                  >
                    1
                  </Badge>
                  <HeartIcon  className="size-8" />
                </Link>
                <Link className="relative" href={"/cart"}>
                
                 
                    {cartDetails && <Badge
                    className="absolute -top-1/2 -end-1/4 h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                    variant="destructive"
                  >
                    {cartDetails?.numOfCartItems}
                  </Badge> 
                    
                  }
                 
                    <ShoppingCart  className="size-8" />
                  
                </Link>
               
                 
                    
                 <DropdownMenu>
  <DropdownMenuTrigger><User className="size-8" /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem asChild><Link href={`/profile`}>Profile</Link></DropdownMenuItem>
    <DropdownMenuItem  onClick={() => signOut({ callbackUrl: "/" })}
                  >Sign out</DropdownMenuItem>
  
  </DropdownMenuContent>
</DropdownMenu>
               
              
                
              </div>
            )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
