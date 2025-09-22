import CategoriesComponent from "@/components/home/CategoriesComponent";
import MainSlider from "@/components/home/MainSlider";
import ProductComponent from "@/components/home/ProductComponent";
import { GridSkeleton } from "@/components/shared/GridSkeleton";

import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <MainSlider />
      <Suspense fallback={<GridSkeleton />}>
        <CategoriesComponent />
      </Suspense>

      <Suspense fallback={<GridSkeleton />}>
        <ProductComponent />
      </Suspense>
    </div>
  );
}
