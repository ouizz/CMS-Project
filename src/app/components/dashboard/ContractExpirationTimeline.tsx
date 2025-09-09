import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: '01-Jan', 'Department B': 4000, 'Department A': 2400 },
  { name: '02-Feb', 'Department B': 3000, 'Department A': 1398 },
  { name: '03-Mar', 'Department B': 2000, 'Department A': 9800 },
  { name: '04-Apr', 'Department B': 2780, 'Department A': 3908 },
  { name: '05-May', 'Department B': 1890, 'Department A': 4800 },
  { name: '06-Jun', 'Department B': 2390, 'Department A': 3800 },
  { name: '07-Jul', 'Department B': 3490, 'Department A': 4300 },
  { name: '08-Aug', 'Department B': 5000, 'Department A': 6000 },
  { name: '09-Sep', 'Department B': 6500, 'Department A': 4500 },
  { name: '10-Oct', 'Department B': 2500, 'Department A': 1800 },
  { name: '11-Nov', 'Department B': 3500, 'Department A': 2500 },
  { name: '12-Dec', 'Department B': 4000, 'Department A': 3000 },
];

const ContractExpirationTimeline = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full mx-auto"> {/* max-w-4xl */}
      <h2 className="text-xl font-bold mb-4 text-yellow-600">Contract Expiration Timeline</h2>
      <div className="flex justify-end mb-4">
        <div className="relative">
            <select className="border rounded p-2 pr-4 w-42 appearance-none text-gray-400">
              <option>ปีงบประมาณ 2566</option>
              <option>ปีงบประมาณ 2567</option>
              <option>ปีงบประมาณ 2568</option>
            </select>
            <svg className="absolute top-1/2 left-36 transform -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Department B" stroke="#f6ad55" strokeWidth={2} />
          <Line type="monotone" dataKey="Department A" stroke="#fbd38d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContractExpirationTimeline;