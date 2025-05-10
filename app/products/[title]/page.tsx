import ProductDetail from "@/components/Products/ProductDetail";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import { ProductsData } from "@/constants/ProductsData";
import SEO from "@/components/Seo/Seo";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Product"
};

const slugify = (title: string): string => {
  return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
};

export async function generateStaticParams() {
  return ProductsData.map((product) => ({
    title: slugify(product.title),
  }));
}

const ProductDetailedPage =  ({ params }: { params: { title: string } }) => {
  const { title } = params;

  if (!title) {
    return (
      <>
        <SEO
          title="Error - Product Not Found"
          description="Invalid product data."
          noIndex
        />
        <p className="text-red-500 text-center">Invalid product data.</p>
      </>
    );
  }

  const product = ProductsData.find((p) => slugify(p.title) === title);

  if (!product) {
    return (
      <>
        <SEO
          title="Product Not Found - Companyname"
          description="The product you are looking for does not exist. Browse our collection for more options."
          noIndex
        />
        <p className="text-red-500 text-center">Product not found!</p>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${product.title} - Premium Water Purifier`}
        description={`Discover the features and specifications of ${product.title}. Perfect for clean and healthy water.`}
        url={`https://companydomain.in/products/${title}`}
        image="https://companydomain.in/assets/og-image.jpg" // Change if using specific image per product
      />
      <ProductDetail product={product} />
      <Testimonials />
    </>
  );
};

export default ProductDetailedPage;
