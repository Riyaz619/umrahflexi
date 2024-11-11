import React from 'react';
import { Shield, Users, Clock, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Your trusted partner in making Umrah accessible to everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Licensed & Certified</h3>
            <p className="text-gray-600">
              Fully authorized Umrah travel partner
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Dedicated support throughout your journey
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Flexible Plans</h3>
            <p className="text-gray-600">
              Customizable payment schedules
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Service</h3>
            <p className="text-gray-600">
              Premium experience at affordable rates
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Commitment</h3>
          <p className="text-gray-700 mb-6">
            We understand the spiritual significance of Umrah and are committed to making this sacred journey accessible to everyone. Our monthly payment plans and comprehensive support ensure that you can focus on your spiritual preparation while we handle all the logistics.
          </p>
          <a
            href="https://wa.me/919967338128"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
            onClick={() => {
              // @ts-ignore
              window.gtag('event', 'conversion', {
                'send_to': 'AW-16476185607/kUT_CM7L2-QZEIfIurA9',
                'value': 1.0,
                'currency': 'INR'
              });
            }}
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}