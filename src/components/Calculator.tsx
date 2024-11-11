import React, { useState } from 'react';
import { Calendar, RefreshCw, FileCheck } from 'lucide-react';

export default function Calculator() {
  const [selectedPackage, setSelectedPackage] = useState('budget');
  const [months, setMonths] = useState('12');

  const prices = {
    budget: 60000,
    comfort: 90000,
    luxury: 120000
  };

  const monthlyPayment = Math.round(prices[selectedPackage as keyof typeof prices] / parseInt(months));
  const completionDate = new Date();
  completionDate.setMonth(completionDate.getMonth() + parseInt(months));

  const trustFactors = [
    {
      icon: Calendar,
      title: 'Flexible flight dates with free rescheduling'
    },
    {
      icon: RefreshCw,
      title: 'Cancel anytime, get full refund in 7 days'
    },
    {
      icon: FileCheck,
      title: 'Assistance in passport and visa issuance'
    }
  ];

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Package</label>
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="budget">Budget</option>
              <option value="comfort">Comfort</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Duration</label>
            <select
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="6">6 months</option>
              <option value="9">9 months</option>
              <option value="12">12 months</option>
            </select>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Monthly Payment:</span>
            <span className="text-xl font-semibold text-green-600">₹{monthlyPayment.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Completion Date:</span>
            <span className="text-sm font-medium">{completionDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</span>
          </div>
        </div>

        <a
          href={`https://wa.me/919967338128?text=I'm interested in the ${selectedPackage} package with ${months} months payment plan`}
          className="mt-6 w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
          Start a plan now
        </a>
      </div>

      <div className="mt-8 flex flex-nowrap overflow-x-auto sm:grid sm:grid-cols-3 gap-4">
        {trustFactors.map((factor, index) => {
          const Icon = factor.icon;
          return (
            <div key={index} className="flex items-center flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                <Icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-3 text-sm font-medium text-gray-900 whitespace-nowrap">{factor.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}