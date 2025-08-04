import React from 'react';
import ImageSlider from '../components/ImageSlider';
import AppleServices from '../components/AppleServices';
import AppleFeatures from '../components/AppleFeatures';
import { ChevronDown, Smartphone, Tablet, Watch, Tv, Headphones, Laptop } from 'lucide-react';

const HomePage: React.FC = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'iPhone 15 Pro',
      subtitle: 'Titanium. So strong. So light. So Pro.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'iPad Pro',
      subtitle: 'Supercharged by M2 chip.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Apple Watch Series 9',
      subtitle: 'Smarter. Brighter. Mightier.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Apple TV 4K',
      subtitle: 'The Apple experience. Cinematic in every sense.',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'MacBook Pro',
      subtitle: 'Mind-blowing. Head-turning.',
    },
  ];

  const productCategories = [
    { name: 'iPhone', icon: Smartphone, path: '/iphone', color: 'bg-blue-500' },
    { name: 'iPad', icon: Tablet, path: '/ipad', color: 'bg-purple-500' },
    { name: 'Mac', icon: Laptop, path: '/mac', color: 'bg-gray-500' },
    { name: 'Watch', icon: Watch, path: '/watch', color: 'bg-red-500' },
    { name: 'AirPods', icon: Headphones, path: '/airpods', color: 'bg-green-500' },
    { name: 'TV', icon: Tv, path: '/tv', color: 'bg-indigo-500' },
  ];

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Hero Section with Image Slider */}
      <div className="relative h-screen">
        <ImageSlider slides={slides} />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToContent}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Explore the lineup.
            </h2>
            <p className="text-lg text-gray-600">
              Take a closer look at every Apple product and find the best ones for you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {productCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  className="group cursor-pointer"
                  onClick={() => window.location.href = category.path}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Apple Services */}
      <AppleServices />

      {/* Apple Features */}
      <AppleFeatures />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Store. The best way to buy the products you love.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the latest Apple products and accessories. Get expert advice, 
              trade in your device, and enjoy free delivery on your next purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Experience the magic of Apple
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From innovative design to cutting-edge technology, every Apple product 
                is crafted to enhance your daily life and unlock new possibilities.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200">
                  Shop now
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200">
                  Learn more
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
                alt="Apple products"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;