import React from 'react';
import { Plane, FileCheck, Utensils, Bus, Users, Package } from 'lucide-react';

const commonInclusions = [
  { icon: Plane, text: 'Flights' },
  { icon: FileCheck, text: 'Visa' },
  { icon: Utensils, text: 'Meals' },
  { icon: Bus, text: 'Transit' },
  { icon: Users, text: 'Guide' },
  { icon: Package, text: 'Kit' },
];

const packages = [
  {
    name: 'Budget',
    price: '₹5,000',
    description: 'Perfect for those seeking an essential Umrah experience',
    features: [
      '3-star hotels',
      'Shared room (4 persons)',
      'Group transportation',
      'Basic meals',
      'Standard Umrah kit',
    ],
    link: '/packages/budget',
  },
  {
    name: 'Comfort',
    price: '₹7,500',
    description: 'Enhanced comfort with premium amenities',
    features: [
      '4-star hotels',
      'Shared room (2 persons)',
      'Semi-private transport',
      'Buffet meals',
      'Premium Umrah kit',
    ],
    popular: true,
    link: '/packages/comfort',
  },
  {
    name: 'Luxury',
    price: '₹10,000',
    description: 'The ultimate spiritual journey experience',
    features: [
      '5-star luxury hotels',
      'Private room option',
      'Private transportation',
      'Premium dining',
      'VIP Umrah kit',
    ],
    link: '/packages/luxury',
  },
];

export default function Packages() {
  return (
    <div id="packages" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Packages
          </h2>
          <p className="mt-4 text-xl text-gray-600">15-day complete Umrah packages</p>
        </div>

        <div className="mt-8">
          <div className="flex flex-nowrap overflow-x-auto gap-4 justify-between pb-4 px-4 md:grid md:grid-cols-6 md:gap-8 md:justify-items-center">
            {commonInclusions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center flex-shrink-0">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="mt-2 text-sm text-gray-600 whitespace-nowrap">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <a
              key={index}
              href={`https://wa.me/919967338128?text=I'm interested in the ${pkg.name} package`}
              onClick={() => {
                // @ts-ignore
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-16476185607/kUT_CM7L2-QZEIfIurA9',
                  'value': 1.0,
                  'currency': 'INR'
                });
              }}
              className={`block relative rounded-2xl bg-white p-8 shadow-lg transition-transform hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-green-600' : ''
              }`}
            >
              {pkg.popular && (
                <span className="absolute top-0 -translate-y-1/2 transform rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{pkg.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {pkg.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6 mr-2" />
                  Get Details
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}