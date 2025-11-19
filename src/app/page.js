 'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PerformanceReport = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const chartRef = useRef(null);

  const formatAED = (amount) => {
    return `AED ${Math.abs(amount).toLocaleString('en-US')}`;
  };

  const salesData = {
    labels: ['August', 'September', 'October'],
    datasets: [
      {
        label: 'Counter Sales',
        data: [113418, 138893, 196523],
        borderColor: 'rgb(20, 184, 166)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Talabat Sales',
        data: [6809, 17966, 17157],
        borderColor: 'rgb(251, 146, 60)',
        backgroundColor: 'rgba(251, 146, 60, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Noon Sales',
        data: [643, 912, 2051],
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Total Sales',
        data: [120870, 157771, 215731],
        borderColor: 'rgb(15, 118, 110)',
        backgroundColor: 'rgba(15, 118, 110, 0.2)',
        borderWidth: 4,
        tension: 0.4,
        fill: true,
        borderDash: [5, 5],
      },
    ],
  };

  const salesChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += 'AED ' + context.parsed.y.toLocaleString('en-US');
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return 'AED ' + value.toLocaleString('en-US');
          },
          font: {
            size: 11,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    },
  };

  // State to handle client-side rendering of the chart
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);


  const NavButton = ({ sectionId, label }) => {
    const isActive = activeSection === sectionId;
    return (
      <button
        onClick={() => setActiveSection(sectionId)}
        className={`nav-btn px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
          isActive
            ? 'text-teal-600 border-b-2 border-teal-600'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        {label}
      </button>
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          // OVERVIEW SECTION
          <div className="report-section pb-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3-Month Performance Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-2 border-red-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">AUGUST 2025</p>
                  <h3 className="text-2xl font-bold text-red-700">{formatAED(-76922)}</h3>
                  <p className="text-sm text-red-600 font-semibold mt-2">Loss Ratio: -63.64%</p>
                  <p className="text-xs text-gray-600 mt-3">Startup ramp-up phase</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">SEPTEMBER 2025</p>
                  <h3 className="text-2xl font-bold text-orange-700">{formatAED(-31630)}</h3>
                  <p className="text-sm text-green-600 font-semibold mt-2">Loss Ratio: -20.05%</p>
                  <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    58.8% Improvement
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">OCTOBER 2025</p>
                  <h3 className="text-2xl font-bold text-green-700">{formatAED(5915)}</h3>
                  <p className="text-sm text-green-600 font-semibold mt-2">Profit Ratio: +2.74%</p>
                  <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Breakeven Achieved!
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg border-2 border-teal-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold mb-1">3-MONTH TOTAL REVENUE</p>
                    <h3 className="text-2xl font-bold text-gray-900">{formatAED(494372)}</h3>
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
                    <h3 className="text-2xl font-bold text-teal-600">{formatAED(-102637)}</h3>
                    <p className="text-xs text-gray-600 mt-1">Strong recovery trend</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">KEY HIGHLIGHTS</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">Strong Revenue Growth</p>
                    <p className="text-teal-100 text-sm">Sales increased **78.48%** from August to October</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">Improved Profitability</p>
                    <p className="text-teal-100 text-sm">Reached profitability in October with **{formatAED(5915)}** net profit</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold mb-1">Cost Control</p>
                    <p className="text-teal-100 text-sm">Indirect expenses reduced by **25.4%** August to October</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'investment':
        return (
          // INVESTMENT SECTION
          <div className="report-section pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Investment & Capital Structure</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                <p className="text-sm text-gray-600 font-semibold mb-2">EQUITY INVESTMENT</p>
                <h3 className="text-3xl font-bold text-gray-900">{formatAED(1046599)}</h3>
                <p className="text-sm text-gray-600 mt-2">Permanent capital</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200">
                <p className="text-sm text-gray-600 font-semibold mb-2">WORKING CAPITAL</p>
                <h3 className="text-3xl font-bold text-gray-900">{formatAED(157478)}</h3>
                <p className="text-sm text-gray-600 mt-2">Temporary funding</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg border-2 border-teal-200">
                <p className="text-sm text-gray-600 font-semibold mb-2">TOTAL DEPLOYED</p>
                <h3 className="text-3xl font-bold text-gray-900">{formatAED(1204077)}</h3>
                <p className="text-sm text-gray-600 mt-2">Current total</p>
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Capital Structure</h3>
              <p className="text-gray-700 text-sm">
                **{formatAED(1046599)}** is permanent equity investment providing **100% ownership** and locked into the business
              </p>
              <p className="text-gray-700 text-sm mt-2">
                **{formatAED(157478)}** is temporary working capital infused to support operations and to be repaid to partners from profits
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 overflow-x-auto">
              <h3 className="font-bold text-gray-900 mb-6">Equity Investment by Partner</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-teal-200">
                    <th className="text-left py-3 px-3 font-bold text-gray-900">Partner</th>
                    <th className="text-right py-3 px-3 font-bold text-gray-900">Equity</th>
                    <th className="text-center py-3 px-3 font-bold text-gray-900">Ownership</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 font-semibold text-gray-900">Partner A (Riyas)</td>
                    <td className="py-3 px-3 text-right text-gray-700">{formatAED(451613)}</td>
                    <td className="py-3 px-3 text-center font-bold text-teal-600">43.15%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 font-semibold text-gray-900">Partner B (Pranav)</td>
                    <td className="py-3 px-3 text-right text-gray-700">{formatAED(163920)}</td>
                    <td className="py-3 px-3 text-center font-bold text-teal-600">15.66%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 font-semibold text-gray-900">Partner C (Jamsheer)</td>
                    <td className="py-3 px-3 text-right text-gray-700">{formatAED(220439)}</td>
                    <td className="py-3 px-3 text-center font-bold text-teal-600">21.06%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 font-semibold text-gray-900">Partner D (Muneeb)</td>
                    <td className="py-3 px-3 text-right text-gray-700">{formatAED(141116)}</td>
                    <td className="py-3 px-3 text-center font-bold text-teal-600">13.48%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 font-semibold text-gray-900">Partner E (Shafeeq)</td>
                    <td className="py-3 px-3 text-right text-gray-700">{formatAED(49511)}</td>
                    <td className="py-3 px-3 text-center font-bold text-teal-600">4.73%</td>
                  </tr>
                  <tr className="bg-teal-50">
                    <td className="py-3 px-3 font-bold text-gray-900">Other Partners</td>
                    <td className="py-3 px-3 text-right text-gray-700">{formatAED(20000)}</td>
                    <td className="py-3 px-3 text-center font-bold text-teal-600">1.92%</td>
                  </tr>
                  <tr className="border-t-2 border-teal-600 bg-teal-50">
                    <td className="py-3 px-3 font-bold text-gray-900">TOTAL EQUITY</td>
                    <td className="py-3 px-3 text-right font-bold text-gray-900">{formatAED(1046599)}</td>
                    <td className="py-3 px-3 text-center font-bold text-teal-600">100.00%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-6">Working Capital by Partner</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-purple-50 rounded">
                    <span className="text-gray-700">Riyas</span>
                    <span className="font-bold">{formatAED(65896)}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-50 rounded">
                    <span className="text-gray-700">Pranav</span>
                    <span className="font-bold">{formatAED(43640)}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-50 rounded">
                    <span className="text-gray-700">Jamsheer</span>
                    <span className="font-bold">{formatAED(42091)}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-50 rounded">
                    <span className="text-gray-700">Muneeb</span>
                    <span className="font-bold">{formatAED(5851)}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-purple-100 rounded border border-purple-300 mt-2 font-bold">
                    <span>Total WC</span>
                    <span className="text-purple-600">{formatAED(157478)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-200 p-8 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Capital Structure Summary</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>• **Equity Investment (Permanent):** {formatAED(1046599)} representing 100% ownership stake locked into the business assets and operations</p>
                <p>• **Working Capital (Temporary):** {formatAED(157478)} infused to support operations over 3 months - will be progressively repaid to partners from profits</p>
                <p>• **Ownership Based On:** Equity investment only - working capital contribution does not affect ownership percentages</p>
                <p>• **Strategic Deployment:** Working capital infusions increased monthly to support 78.48% revenue growth (Aug: 45.2K, Sep: 58.3K, Oct: 53.9K)</p>
                <p>• **Path to Repayment:** October profitability ({formatAED(5915)}) signals ability to begin working capital repayment</p>
                <p className="pt-3 border-t border-teal-300">
                  **Repayment Strategy:** Starting Q1 2026, working capital will be returned quarterly based on sustained profitability. Each partner receives repayment proportional to their WC contribution.
                </p>
              </div>
            </div>
          </div>
        );
      case 'sales':
        return (
          // SALES SECTION
          <div className="report-section pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Sales Performance Analysis</h2>

            {/* Sales Growth Chart */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-6">Sales Growth Trend (Aug - Oct 2025)</h3>
              {isClient ? (
                <Line ref={chartRef} data={salesData} options={salesChartOptions} />
              ) : (
                <div className="text-center py-10 text-gray-500">Loading chart...</div>
              )}
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-teal-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">Sales Channel</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">August</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">September</th>
                    <th className="text-right py-4 px-4 font-bold text-gray-900">October</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">Total Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">Counter Sales</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(113418)}</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(138893)}</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(196523)}</td>
                    <td className="py-4 px-4 text-center font-bold text-green-600">+73.08%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">Talabat Sales</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(6809)}</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(17966)}</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(17157)}</td>
                    <td className="py-4 px-4 text-center font-bold text-green-600">+151.83%</td>
                  </tr>
                  <tr className="bg-teal-50 hover:bg-teal-100">
                    <td className="py-4 px-4 font-semibold text-gray-900">Noon Sales</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(643)}</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(912)}</td>
                    <td className="py-4 px-4 text-right text-gray-700">{formatAED(2051)}</td>
                    <td className="py-4 px-4 text-center font-bold text-green-600">+218.67%</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-teal-600 bg-teal-50">
                    <td className="py-4 px-4 font-bold text-gray-900">TOTAL SALES</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">{formatAED(120870)}</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">{formatAED(157771)}</td>
                    <td className="py-4 px-4 text-right font-bold text-gray-900">{formatAED(215731)}</td>
                    <td className="py-4 px-4 text-center font-bold text-teal-600">+78.48%</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Counter Sales (90.79%)</h4>
                <p className="text-gray-700 text-sm mb-3">Dominant revenue driver:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Aug → Sep: +22.46%</li>
                  <li>• Sep → Oct: +41.49%</li>
                  <li>• 3-Month: +73.08%</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Talabat (7.95%)</h4>
                <p className="text-gray-700 text-sm mb-3">Online platform growth:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Aug → Sep: +163.86%</li>
                  <li>• Stabilized Oct</li>
                  <li>• 3-Month: +151.83%</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Noon (0.95%)</h4>
                <p className="text-gray-700 text-sm mb-3">Emerging channel:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Aug → Sep: +41.93%</li>
                  <li>• Sep → Oct: +124.82%</li>
                  <li>• 3-Month: +218.67%</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'expenses':
        return (
          // EXPENSES SECTION
          <div className="report-section pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Expenses & Cost Analysis</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-6">Direct Expenses (Cost of Sales)</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Ingredients</span>
                      <span className="text-gray-900 font-bold">{formatAED(234702)}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-semibold">Cost of Sales</span>
                      <span className="text-gray-900 font-bold">{formatAED(18393)}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-6 pt-6 border-t">Total: {formatAED(253096)}</p>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-6">Indirect Expenses (Operating)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-gray-700 font-semibold">August</span>
                    <span className="text-gray-900 font-bold">{formatAED(134702)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-gray-700 font-semibold">September</span>
                    <span className="text-gray-900 font-bold">{formatAED(109022)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700 font-semibold">October</span>
                    <span className="text-gray-900 font-bold">{formatAED(100546)}</span>
                  </div>
                </div>
                <p className="text-sm text-green-600 font-semibold mt-6 pt-6 border-t">↓ 25.4% Reduction</p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-6">Marketing & Advertising Spend</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-600 mb-2">{formatAED(11126)}</p>
                  <p className="text-gray-600">August</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-orange-600 mb-2">{formatAED(9157)}</p>
                  <p className="text-gray-600">September</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">{formatAED(8029)}</p>
                  <p className="text-gray-600">October</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-6 pt-6 border-t">
                Spend reduced **27.9%** while sales increased **78.48%**
              </p>
            </div>
          </div>
        );
      case 'profitability':
        return (
          // PROFITABILITY SECTION
          <div className="report-section pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Profitability Analysis</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 rounded-lg p-6 border-red-200 bg-red-50">
                <h4 className="font-bold text-gray-900 mb-4">August 2025</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Revenue</span>
                    <span className="font-bold text-gray-900">{formatAED(120870)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-300">
                    <span className="text-gray-700">Cost of Sales</span>
                    <span className="font-bold text-gray-900">-{formatAED(63256)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Operating Expenses</span>
                    <span className="font-bold text-gray-900">-{formatAED(134702)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t-2 border-red-400">
                    <span className="font-bold text-red-700">Net Profit</span>
                    <span className="font-bold text-lg text-red-700">-{formatAED(76922)}</span>
                  </div>
                  <div className="text-center py-2 rounded font-bold bg-red-200 text-red-800">-63.64%</div>
                </div>
              </div>

              <div className="border-2 rounded-lg p-6 border-orange-200 bg-orange-50">
                <h4 className="font-bold text-gray-900 mb-4">September 2025</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Revenue</span>
                    <span className="font-bold text-gray-900">{formatAED(157771)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-300">
                    <span className="text-gray-700">Cost of Sales</span>
                    <span className="font-bold text-gray-900">-{formatAED(80435)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Operating Expenses</span>
                    <span className="font-bold text-gray-900">-{formatAED(109022)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t-2 border-orange-400">
                    <span className="font-bold text-orange-700">Net Profit</span>
                    <span className="font-bold text-lg text-orange-700">-{formatAED(31630)}</span>
                  </div>
                  <div className="text-center py-2 rounded font-bold bg-orange-200 text-orange-800">-20.05%</div>
                </div>
              </div>

              <div className="border-2 rounded-lg p-6 border-green-200 bg-green-50">
                <h4 className="font-bold text-gray-900 mb-4">October 2025</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Revenue</span>
                    <span className="font-bold text-gray-900">{formatAED(215731)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-300">
                    <span className="text-gray-700">Cost of Sales</span>
                    <span className="font-bold text-gray-900">-{formatAED(109405)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Operating Expenses</span>
                    <span className="font-bold text-gray-900">-{formatAED(100546)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t-2 border-green-400">
                    <span className="font-bold text-green-700">Net Profit</span>
                    <span className="font-bold text-lg text-green-700">+{formatAED(5915)}</span>
                  </div>
                  <div className="text-center py-2 rounded font-bold bg-green-200 text-green-800">+2.74%</div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border-2 border-teal-200 p-8 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Profitability Trajectory
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>• **August:** Net loss of {formatAED(76922)} (63.64% loss ratio) - startup phase</p>
                <p>• **September:** Loss narrowed to {formatAED(31630)} (20.05% loss ratio) - 58.8% improvement</p>
                <p>• **October:** Achieved profitability at {formatAED(5915)} (2.74% profit margin) - breakeven reached</p>
                <p className="pt-3 border-t border-teal-300">
                  **Overall Trend:** Strong recovery trajectory shows effective cost management and revenue growth alignment
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-6">Gross Profit Margin Improvement</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">August: 47.66%</span>
                    <span className="text-gray-600">{formatAED(57614)}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-teal-600 h-3 rounded-full" style={{ width: '47.66%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">September: 49.02%</span>
                    <span className="text-gray-600">{formatAED(77336)}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-teal-600 h-3 rounded-full" style={{ width: '49.02%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900">October: 49.29%</span>
                    <span className="text-gray-600">{formatAED(106327)}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-teal-600 h-3 rounded-full" style={{ width: '49.29%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 pt-6 border-t">
                Consistent margin improvement shows better cost control and pricing strategy
              </p>
            </div>
          </div>
        );
      case 'recommendations':
        return (
          // RECOMMENDATIONS SECTION
          <div className="report-section pb-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Strategic Recommendations</h2>

            <div className="space-y-6">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Capitalize on Growth Momentum
                </h3>
                <p className="text-gray-700 mb-3">
                  With **78.48%** revenue growth and October reaching profitability, maintain current operational efficiency
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Continue current marketing strategy - delivering excellent ROI</li>
                  <li>Allocate more budget to **Noon** platform (highest growth: 218.67%)</li>
                  <li>Maintain counter sales focus while growing online channels</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sustain Cost Control Excellence
                </h3>
                <p className="text-gray-700 mb-3">
                  Indirect expenses reduced by **25.4%** while maintaining service quality
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Document current cost-saving processes for consistency</li>
                  <li>Monitor ingredient costs - ensure quality is maintained</li>
                  <li>Target **50%+** gross margin by optimizing procurement further</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Next Quarter Goals (Nov - Jan)
                </h3>
                <p className="text-gray-700 mb-3">Based on current trajectory and market conditions</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>**Revenue Target:** {formatAED(250000)}+ monthly</li>
                  <li>**Profit Target:** {formatAED(15000)}+ monthly net profit</li>
                  <li>**Gross Margin:** Maintain 49%+ through supplier negotiation</li>
                  <li>**Marketing ROI:** Reduce spend while maintaining sales growth</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Areas to Monitor
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Ingredient costs increased 80.7% with revenue up 78.48%</li>
                  <li>Verify Talabat commissions aren't eroding profitability</li>
                  <li>Monitor cash flow to support growth investments</li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pt-8 pb-6 border-b-2 border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Rukn Al Bait Al Arabi</h1>
              <p className="text-gray-600 mt-1">Performance Report • August - October 2025</p>
            </div>
            <button 
              onClick={() => window.print()} 
              className="no-print bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
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

        {/* Navigation - Hidden in print */}
        <div className="no-print flex gap-2 mt-8 mb-8 overflow-x-auto pb-2 border-b border-gray-200">
          <NavButton sectionId="overview" label="Overview" />
          <NavButton sectionId="investment" label="Investment" />
          <NavButton sectionId="sales" label="Sales" />
          <NavButton sectionId="expenses" label="Expenses" />
          <NavButton sectionId="profitability" label="Profitability" />
          <NavButton sectionId="recommendations" label="Recommendations" />
        </div>

        {renderSection()}

        {/* CTA */}
        <div className="mt-16 mb-12 text-center bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-3">Need Help With Your Financial Reports?</h2>
          <p className="text-teal-100 mb-6">We prepare comprehensive reports that help you understand and grow your business</p>
          <button className="no-print bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
            Schedule Your Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReport;