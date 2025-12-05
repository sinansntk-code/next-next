import Productlist from "../components/productlist";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}
export const metadata = {
  title: "STYLE HUB PRODUCTS",
  description: "This is the description of the page",
};
export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div style={{ padding: "20px"}}>
      <h2>All Products</h2>
      <Productlist products={products} />   {/* Show all */}
    </div>
  );
}
