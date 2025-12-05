import Productlist from "./components/productlist";
import Carousel from "./components/Carousel"
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}
export const metadata = {
  title: "STYLE HUB",
  description: "This is the description of the page",
};
export default async function Home() {
  const products = await getProducts();

  return (
    <div>
<Carousel/>
      {/* ✅ Only 4 products */}
      <Productlist products={products} limit={4} />
    </div>
  );
}
