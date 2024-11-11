import React from 'react';
import { Banknote, Calendar, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Umrah with just</span>
              <span className="block text-green-600">₹5,000/month</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Begin your sacred journey today with our flexible payment plans. Complete your Mecca-Madina dream without financial burden.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Banknote className="h-6 w-6 text-green-600" />
                </div>
                <p className="ml-3 text-lg text-gray-500">Book at today's price</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <p className="ml-3 text-lg text-gray-500">Pay over 6-12 months</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <p className="ml-3 text-lg text-gray-500">No fee on missed payments</p>
              </div>
            </div>

            <div className="mt-8">
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
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 mr-2" />
                Start your journey now
              </a>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <img
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Kaaba at Masjid Al-Haram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}