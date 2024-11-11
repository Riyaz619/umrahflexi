import React from 'react';
import { Building2, Mail } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We are dedicated to making the sacred journey of Umrah accessible to everyone. Our innovative monthly payment plans and comprehensive support services have helped thousands of pilgrims fulfill their spiritual aspirations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-x-4">
            <Building2 className="h-12 w-12 text-green-600 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-sm font-semibold text-gray-900">
                Trusted by Thousands
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Over 10 years of experience in Umrah services
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-x-4">
            <Mail className="h-12 w-12 text-green-600 flex-shrink-0" />
            <div className="text-left">
              <h3 className="text-sm font-semibold text-gray-900">
                Need Support?
              </h3>
              <a href="mailto:support@gohajjumrah.com" className="mt-2 text-sm text-green-600 hover:text-green-700">
                support@gohajjumrah.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}