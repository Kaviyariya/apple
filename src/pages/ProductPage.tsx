import React from 'react';
import ImageSlider from '../components/ImageSlider';
import ProductGrid from '../components/ProductGrid';
import { productData } from '../data/productData';

interface ProductPageProps {
  category: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ category }) => {
  const categoryData = productData[category];

  if (!categoryData) {
    return <div>Product category not found</div>;
  }

  return (
    <div>
      {/* Hero Section with Product Slider */}
      <div className="h-screen">
        <ImageSlider slides={categoryData.heroSlides} />
      </div>

      {/* Product Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Choose your {category}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect {category.toLowerCase()} for your needs. Every model offers 
              the innovation and quality you expect from Apple.
            </p>
          </div>
          
          <ProductGrid products={categoryData.products} />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;