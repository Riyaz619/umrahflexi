import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Go Hajj Umrah" className="h-12 w-auto" />
            <span className="ml-2 text-xl font-semibold text-gray-900">GoHajjUmrah</span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <a href="#packages" className="text-gray-500 hover:text-gray-900">Packages</a>
            <a href="#about" className="text-gray-500 hover:text-gray-900">About</a>
            <a
              href="https://wa.me/919967338128"
              className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
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
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}