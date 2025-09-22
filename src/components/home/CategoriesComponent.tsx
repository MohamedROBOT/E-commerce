
import { ICategory } from "@/interfaces/category.interface";
import { getCategories } from "@/service/categories.service";
import React from "react";
import CategoriesSlider from "./CategoriesSlider";
import SectionTitle from "../shared/SectionTitle";
import { Separator } from "../ui/separator";



export default async function CategoriesComponent() {


  const { data: categories }: { data: ICategory[] } = await getCategories();



  return (
    <section className="py-10">
      <div className="container mx-auto">
        <SectionTitle title = {"Categories"} subtitle  = {"Shop by category"}/>
        {categories && (
        <CategoriesSlider  categories={categories } />
        )}
        <Separator  />
      </div>
      
    </section>
  );
}
