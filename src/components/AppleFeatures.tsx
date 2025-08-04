import React from 'react';
import { Shield, Leaf, Users, Accessibility } from 'lucide-react';

const AppleFeatures: React.FC = () => {
  const features = [
    {
      title: 'Privacy',
      description: 'Privacy is a fundamental human right. At Apple, it\'s also one of our core values.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
      color: 'text-blue-600',
    },
    {
      title: 'Environment',
      description: 'We\'re committed to making our products without taking from the earth.',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
      color: 'text-green-600',
    },
    {
      title: 'Inclusion & Diversity',
      description: 'We believe diverse teams and inclusive culture are the foundation of everything we do.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
      color: 'text-purple-600',
    },
    {
      title: 'Accessibility',
      description: 'Technology is most powerful when everyone can use it.',
      icon: Accessibility,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80',
      color: 'text-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Apple values.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What we believe in guides everything we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className={`h-8 w-8 ${feature.color} bg-white rounded-full p-1.5`} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <button className={`${feature.color} hover:underline font-medium transition-colors duration-200`}>
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppleFeatures;