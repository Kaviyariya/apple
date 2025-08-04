import React from 'react';
import { Play, Music, Gamepad2, Newspaper, BookOpen, Heart, CreditCard, Cloud } from 'lucide-react';

const AppleServices: React.FC = () => {
  const services = [
    {
      name: 'Apple TV+',
      description: 'Stream award-winning Apple Originals on every screen.',
      icon: Play,
      color: 'bg-black',
      textColor: 'text-white',
    },
    {
      name: 'Apple Music',
      description: 'Over 100 million songs, ad-free.',
      icon: Music,
      color: 'bg-gradient-to-br from-pink-500 to-red-500',
      textColor: 'text-white',
    },
    {
      name: 'Apple Arcade',
      description: 'Over 200 incredibly fun games. No ads. No in-app purchases.',
      icon: Gamepad2,
      color: 'bg-gradient-to-br from-blue-500 to-purple-600',
      textColor: 'text-white',
    },
    {
      name: 'Apple News+',
      description: 'Hundreds of magazines and leading newspapers.',
      icon: Newspaper,
      color: 'bg-gradient-to-br from-red-500 to-pink-500',
      textColor: 'text-white',
    },
    {
      name: 'Apple Books',
      description: 'Millions of books and audiobooks to explore.',
      icon: BookOpen,
      color: 'bg-gradient-to-br from-orange-400 to-red-500',
      textColor: 'text-white',
    },
    {
      name: 'Apple Fitness+',
      description: 'Fitness for everyone, powered by Apple Watch.',
      icon: Heart,
      color: 'bg-gradient-to-br from-green-400 to-blue-500',
      textColor: 'text-white',
    },
    {
      name: 'Apple Card',
      description: 'A credit card created by Apple, not a bank.',
      icon: CreditCard,
      color: 'bg-gradient-to-br from-gray-100 to-gray-200',
      textColor: 'text-gray-900',
    },
    {
      name: 'iCloud+',
      description: 'Keep your photos, files, and more secure and up to date.',
      icon: Cloud,
      color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
      textColor: 'text-white',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Apple services.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entertainment, productivity, and creativity apps and services from Apple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.name}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className={`${service.color} rounded-2xl p-6 h-48 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <div>
                    <IconComponent className={`h-8 w-8 ${service.textColor} mb-4`} />
                    <h3 className={`text-xl font-semibold ${service.textColor} mb-2`}>
                      {service.name}
                    </h3>
                  </div>
                  <p className={`text-sm ${service.textColor} opacity-90 leading-relaxed`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105">
            Explore all services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppleServices;