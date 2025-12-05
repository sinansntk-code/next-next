import ProductDetails from "@/app/components/productDetails";
import { notFound } from "next/navigation";
export const metadata = {
  title: "PRODUCT DETAILS",
  description: "This is the description of the page",
};
export default async function ProductPage({ params }) {
  const { id } = await params; 

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();
  const product = await res.json();

  return <ProductDetails product={product} />;
}