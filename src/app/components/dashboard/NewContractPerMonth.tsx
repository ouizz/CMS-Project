import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: '01-Jan', New: 10, Accumulate: 10, 'Last Year': 40 },
  { name: '02-Feb', New: 15, Accumulate: 25, 'Last Year': 40 },
  { name: '03-Mar', New: 20, Accumulate: 45, 'Last Year': 40 },
  { name: '04-Apr', New: 35, Accumulate: 80, 'Last Year': 40 },
  { name: '05-May', New: 40, Accumulate: 120, 'Last Year': 40 },
  { name: '06-Jun', New: 45, Accumulate: 165, 'Last Year': 40 },
  { name: '07-Jul', New: 50, Accumulate: 215, 'Last Year': 40 },
  { name: '08-Aug', New: 55, Accumulate: 270, 'Last Year': 40 },
  { name: '09-Sep', New: 60, Accumulate: 330, 'Last Year': 40 },
  { name: '10-Oct', New: 70, Accumulate: 400, 'Last Year': 40 },
  { name: '11-Nov', New: 80, Accumulate: 480, 'Last Year': 40 },
  { name: '12-Dec', New: 90, Accumulate: 570, 'Last Year': 40 },
];

const NewContractPerMonth = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-green-600">New Contract per Month</h2>
      <div className="flex justify-end mb-4">
        <div className="relative">
            <select className="border rounded p-2 pr-4 w-42 appearance-none text-gray-400">
              <option>Year</option>
              <option>2023</option>
              <option>2024</option>
            </select>
            <svg className="absolute top-1/2 left-36 transform -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="New" barSize={20} fill="#4caf50" />
          <Line type="monotone" dataKey="Accumulate" stroke="#5c7dfc" strokeWidth={3} />
          <Line type="monotone" dataKey="Last Year" stroke="#f44336" strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewContractPerMonth;