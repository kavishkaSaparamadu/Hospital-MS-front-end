import React from 'react';
import MainLayout from "../components/layouts/MainLayout";
import { TEChart } from "tw-elements-react";

const sideNavBarLinks = [
  { title: "Dashboard", path: "/doctor/doctorDashboard" },
  { title: "Appointments", path: "/doctor/appointment" },
  { title: "Apply Doctor", path: "/Doctor/applyDoctor" },
  { title: "Prescription", path: "/doctor/prescriptions" },
  { title: "Finance", path: "/Doctor/Finance" },
];

const Finance = () => {
  return (
    <div>
      <MainLayout data={sideNavBarLinks}>
        <div className="bg-gray-50 py-16 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                The Finance-only hiring platform
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4"></p>
            </div>
          </div>
          <div className="mt-10 pb-1">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Monthly Income
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">6000$</dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Response rate
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">58%</dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Work Hours
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">30+</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Container */}
        <div className="flex justify-between"> {/* Add Flexbox */}
          {/* Chart 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 chart-container" style={{ width: '48%', height: '400px' }}> {/* Adjust size here */}
            <h2 className="text-lg font-semibold mb-4">Finance Chart</h2>
            <TEChart
              type="bar"
              data={{
                labels: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                datasets: [
                  {
                    label: "Appoiment",
                    data: [2112, 2343, 2545, 23, 2365, 1985, 987],
                  },
                ],
              }}
            />
          </div>

          {/* Chart 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 chart-container" style={{ width: '48%', height: '400px',  }}> {/* Adjust size here */}
            <h2 className="text-lg font-semibold mb-4">Finance Chart</h2>
            <TEChart
              type="pie"
              data={{
                labels: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                datasets: [
                  {
                    label: "Appoiment",
                    data: [2112, 2343, 2545, 23, 2365, 1985, 987],
                  },
                ],
              }}
            />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Finance;
