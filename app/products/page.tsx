import ProductList from "@/components/Products/ProductList";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import SEO from "@/components/Seo/Seo";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Products"
}

const ProductsPage = () => {
  return (
    <>
      <SEO
        title="Our Products - Premium Water Purifiers by Companyname"
        description="Explore our range of premium water purifiers designed for homes and offices. Discover top-notch quality and innovation."
        url="https://companydomain.in/products"
        canonical="https://companydomain.in/products"
      />
      <ProductList />
      <Testimonials />
    </>
  );
};

export default ProductsPage;