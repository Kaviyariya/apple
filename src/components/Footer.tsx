import React from 'react';
import AppleLogo from './AppleLogo';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Shop and Learn',
      links: ['Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories'],
    },
    {
      title: 'Apple Wallet',
      links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
    },
    {
      title: 'Account',
      links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
    },
    {
      title: 'Entertainment',
      links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books'],
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Refurbished and Clearance', 'Financing', 'Apple Trade In'],
    },
    {
      title: 'For Business',
      links: ['Apple and Business', 'Shop for Business'],
    },
    {
      title: 'For Education',
      links: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
    },
    {
      title: 'For Healthcare',
      links: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'],
    },
    {
      title: 'Apple Values',
      links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supplier Responsibility'],
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-white font-medium text-sm">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright and Legal */}
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <AppleLogo className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">
                  Copyright © 2025 Apple Inc. All rights reserved.
                </span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Use</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors duration-200">Sales and Refunds</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors duration-200">Legal</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors duration-200">Site Map</a>
              </div>
            </div>

            {/* Country/Region */}
            <div className="text-sm text-gray-400">
              United States
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;