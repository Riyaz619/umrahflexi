import React from 'react';
import { CreditCard, Plane, Calendar } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Select a package and start making payments',
      description: 'Choose from our flexible payment plans starting at just ₹5,000 per month',
      icon: CreditCard,
    },
    {
      title: 'Team will support to get Passport and VISA',
      description: 'Our experienced team handles all documentation and visa processing',
      icon: Plane,
    },
    {
      title: 'Choose your departure date',
      description: 'Select your preferred travel date 3-months before completion of your plan',
      icon: Calendar,
    },
  ];

  return (
    <div id="how-it-works" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            3 Simple Steps to Your Umrah Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We make your spiritual journey seamless and stress-free
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-0 w-full" style={{ height: '2px', background: 'linear-gradient(90deg, #059669 0%, #10B981 100%)' }}></div>
                  )}
                  <div className="relative">
                    <div className="flex flex-col items-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <Icon className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-center text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-white px-4">
                  <blockquote className="text-center text-xl italic text-gray-900 max-w-2xl">
                    "I never thought Umrah would be this accessible. The monthly plan made it happen for me."
                    <footer className="mt-4">
                      <div className="font-semibold not-italic">- Fatima, Mumbai</div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://wa.me/919967338128"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                onClick={() => {
                  // @ts-ignore
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-16476185607/kUT_CM7L2-QZEIfIurA9',
                    'value': 1.0,
                    'currency': 'INR'
                  });
                }}
              >
                Start now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}