'use client'
import React, { useState } from 'react';
import { Download, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProfessionalReport() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pt-8 pb-6 border-b-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Rukn Al Bait Al Arabi</h1>
              <p className="text-gray-600 mt-1">Performance Report • August - October 2025</p>
            </div>
            {/* <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download PDF
            </button> */}
          </div>

          <div className="flex gap-8">
            <div>
              <p className="text-sm text-gray-600 font-semibold">REPORT PERIOD</p>
              <p className="text-lg text-gray-900 font-bold">August - October 2025</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-semibold">PREPARED BY</p>
              <p className="text-lg text-gray-900 font-bold">Booker Accounting & Consulting</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mt-8 mb-8 overflow-x-auto pb-2 border-b border-gray-200">
          {['overview', 'investment', 'sales', 'expenses', 'profitability', 'recommendations'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap capitalize ${
                activeSection === tab
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* OVERVIEW SECTION */}
        {activeSection === 'overview' && (
          <div className="pb-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3-Month Performance Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-2 border-red-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">AUGUST 2025</p>
                  <h3 className="text-2xl font-bold text-red-700">AED -76,922</h3>
                  <p className="text-sm text-red-600 font-semibold mt-2">Loss Ratio: -63.64%</p>
                  <p className="text-xs text-gray-600 mt-3">Startup ramp-up phase</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">SEPTEMBER 2025</p>
                  <h3 className="text-2xl font-bold text-orange-700">AED -31,630</h3>
                  <p className="text-sm text-green-600 font-semibold mt-2">Loss Ratio: -20.05%</p>
                  <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 58.8% Improvement
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">OCTOBER 2025</p>
                  <h3 className="text-2xl font-bold text-green-700">AED +5,915</h3>
                  <p className="text-sm text-green-600 font-semibold mt-2">Profit Ratio: +2.74%</p>
                  <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Breakeven Achieved!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg border-2 border-teal-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">3-MONTH TOTAL REVENUE</p>
                    <h3 className="text-2xl font-bold text-gray-900">AED 494,372</h3>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">REVENUE GROWTH</p>
                    <h3 className="text-2xl font-bold text-green-600">+78.48%</h3>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">GROSS PROFIT MARGIN</p>
                    <h3 className="text-2xl font-bold text-gray-900">49.29%</h3>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">CUMULATIVE NET RESULT</p>
                    <h3 className="text-2xl font-bold text-teal-600">AED -102,637</h3>
                    <p className="text-xs text-gray-600 mt-1">Strong recovery trend</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">KEY HIGHLIGHTS</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Strong Revenue Growth</p>
                    <p className="text-teal-100 text-sm">Sales increased 78.48% from August to October</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Improved Profitability</p>
                    <p className="text-teal-100 text-sm">Reached profitability in October with AED 5,915 net profit</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Cost Control</p>
                    <p className="text-teal-100 text-sm">Indirect expenses reduced by 25.4% August to October</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INVESTMENT SECTION */}
        {activeSection === 'investment' && (
          <div className="pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Investment & Capital Structure</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                <p className="text-sm text-gray-600 font-semibold mb-2">EQUITY INVESTMENT</p>
                <h3 className="text-3xl font-bold text-gray-900">AED 1,046,599</h3>
                <p className="text-sm text-gray-600 mt-2">Permanent capital</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
                <p className="text-sm text-gray-600 font-semibold mb-2">WORKING CAPITAL</p>
                <h3 className="text-3xl font-bold text-gray-900">AED 157,478</h3>
                <p className="text-sm text-gray-600 mt-2">Temporary funding</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg border-2 border-teal-200">
                <p className="text-sm text-gray-600 font-semibold mb-2">TOTAL DEPLOYED</p>
                <h3 className="text-3xl font-bold text-gray-900">AED 1,204,077</h3>
                <p className="text-sm text-gray-600 mt-2">Current total</p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-6">Working Capital by Partner</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-purple-50 rounded">
                    <span className="text-gray-700">Riyas</span>
                    <span className="font-bold">AED 65,896</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-50 rounded">
                    <span className="text-gray-700">Pranav</span>
                    <span className="font-bold">AED 43,640</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-purple-50 rounded">
                    <span className="text-gray-700">Jamsheer</span>
                    <span className="font-bold">AED 42,091</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-50 rounded">
                    <span className="text-gray-700">Muneeb</span>
                    <span className="font-bold">AED 5,851</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-3 bg-purple-100 rounded border border-purple-300 mt-4 font-bold">
                <span>Total Working Capital</span>
                <span className="text-purple-600">AED 157,478</span>
              </div>
              <p className="text-xs text-gray-600 mt-4 pt-4 border-t">Working capital to be returned from profits based on proportional contribution</p>
            </div>
          </div>
        )}

        {/* SALES SECTION */}
        {activeSection === 'sales' && (
          <div className="pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Sales Performance Analysis</h2>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-teal-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Sales Channel</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">August</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">September</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">October</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-semibold text-gray-900">Counter Sales</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 113,418</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 138,893</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 196,523</td>
                    <td className="py-4 px-4 text-center font-bold text-green-600">+73.08%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-semibold text-gray-900">Talabat Sales</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 6,809</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 17,966</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 17,157</td>
                    <td className="py-4 px-4 text-center font-bold text-green-600">+151.83%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-semibold text-gray-900">Noon Sales</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 643</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 912</td>
                    <td className="py-4 px-4 text-right text-gray-700">AED 2,051</td>
                    <td className="py-4 px-4 text-center font-bold text-green-600">+218.67%</td>
                  </tr>
                  <tr className="border-t-2 border-teal-600 bg-teal-50">
                    <td className="py-4 px-4 font-bold text-gray-900">TOTAL</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">AED 120,870</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">AED 157,771</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">AED 215,731</td>
                    <td className="py-4 px-4 text-center font-bold text-teal-600">+78.48%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* EXPENSES SECTION */}
        {activeSection === 'expenses' && (
          <div className="pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Expenses & Cost Analysis</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">August</h4>
                <p className="text-3xl font-bold text-red-700">AED 134,702</p>
              </div>
              <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">September</h4>
                <p className="text-3xl font-bold text-orange-700">AED 109,022</p>
              </div>
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">October</h4>
                <p className="text-3xl font-bold text-green-700">AED 100,546</p>
              </div>
            </div>
          </div>
        )}

        {/* PROFITABILITY SECTION */}
        {activeSection === 'profitability' && (
          <div className="pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Profitability Analysis</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">August 2025</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Revenue</span>
                    <span className="font-bold text-gray-900">AED 120,870</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-700">Cost of Sales</span>
                    <span className="font-bold text-gray-900">-AED 63,256</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Operating Expenses</span>
                    <span className="font-bold text-gray-900">-AED 134,702</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t-2 border-red-400">
                    <span className="font-bold text-red-700">Net Profit</span>
                    <span className="font-bold text-lg text-red-700">-AED 76,922</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange-200 bg-orange-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">September 2025</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Revenue</span>
                    <span className="font-bold text-gray-900">AED 157,771</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-700">Cost of Sales</span>
                    <span className="font-bold text-gray-900">-AED 80,435</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Operating Expenses</span>
                    <span className="font-bold text-gray-900">-AED 109,022</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t-2 border-orange-400">
                    <span className="font-bold text-orange-700">Net Profit</span>
                    <span className="font-bold text-lg text-orange-700">-AED 31,630</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">October 2025</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Revenue</span>
                    <span className="font-bold text-gray-900">AED 215,731</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-gray-700">Cost of Sales</span>
                    <span className="font-bold text-gray-900">-AED 109,405</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Operating Expenses</span>
                    <span className="font-bold text-gray-900">-AED 100,546</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t-2 border-green-400">
                    <span className="font-bold text-green-700">Net Profit</span>
                    <span className="font-bold text-lg text-green-700">+AED 5,915</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RECOMMENDATIONS SECTION */}
        {activeSection === 'recommendations' && (
          <div className="pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Strategic Recommendations</h2>

            <div className="space-y-6">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Capitalize on Growth Momentum
                </h3>
                <p className="text-gray-700 mb-3">With 78.48% revenue growth and October reaching profitability, maintain current operational efficiency</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Continue current marketing strategy - delivering excellent ROI</li>
                  <li>Allocate more budget to Noon platform (highest growth: 218.67%)</li>
                  <li>Maintain counter sales focus while growing online channels</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  Sustain Cost Control Excellence
                </h3>
                <p className="text-gray-700 mb-3">Indirect expenses reduced by 25.4% while maintaining service quality</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Document current cost-saving processes for consistency</li>
                  <li>Monitor ingredient costs - ensure quality is maintained</li>
                  <li>Target 50%+ gross margin by optimizing procurement further</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  Next Quarter Goals (Nov - Jan)
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Revenue Target: AED 250K+ monthly</li>
                  <li>Profit Target: AED 15K+ monthly net profit</li>
                  <li>Gross Margin: Maintain 49%+ through supplier negotiation</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 mb-12 text-center bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Need Help With Your Financial Reports?</h2>
          <p className="text-teal-100 mb-6">We prepare comprehensive reports that help you understand and grow your business</p>
          <a 
            href="https://wa.me/971567678156?text=Hi%2C%20I%27d%20like%20to%20schedule%20a%20free%20consultation%20about%20financial%20reporting" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}