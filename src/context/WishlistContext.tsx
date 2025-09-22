import { createContext, useContext, useState } from "react";

const WishlistContext = createContext({});

import React from "react";

export default function WishlistContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  
  
  const [wishlistDetails, setWishlistDetails] = useState(null)
  console.log(setWishlistDetails);
    return (
    <WishlistContext.Provider value={{wishlistDetails}}>{children}</WishlistContext.Provider>
  );
}


 export function useWishlist(){
  const context =  useContext(WishlistContext)
    if(!context){
        throw new Error("useWishlist must be used within a WishlistContextProvider")
    }

  return context
}