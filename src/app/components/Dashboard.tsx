"use client";

import { FC } from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import Image from "next/image";

const data = [
  { name: "Normal", value: 20 },
  { name: "Warning", value: 10 },
  { name: "Delay", value: 4 },
  { name: "Expired", value: 10 },
];


const COLORS = ["#34D399", "#FBBF24", "#F97316", "#EF4444"];

// interface PieData {
//   name: string;
//   value: number;
//   color: string;
// }

interface BarData {
  name: string;
  value: number;
}

// const pieData: PieData[] = [
//   { name: "Normal", value: 20, color: "#22c55e" },
//   { name: "Warning", value: 4, color: "#facc15" },
//   { name: "Delay", value: 10, color: "#f97316" },
//   { name: "Expired", value: 10, color: "#ef4444" },
// ];

const barData: BarData[] = [
  { name: "Vendor B", value: 400 },
  { name: "Vendor A", value: 350 },
  { name: "Vendor G", value: 300 },
  { name: "Vendor C", value: 250 },
  { name: "Vendor D", value: 200 },
  { name: "Vendor F", value: 150 },
  { name: "Vendor E", value: 120 },
];

const Dashboard: FC = () => {

    const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (

    <div className="grid grid-cols-2 gap-6">

      {/* Contract / Supplier max-w-sm */}
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full" > 
        {/* Header */}
        <div className="flex justify-center gap-4 mb-6">
            <div className="border rounded-xl p-4 flex flex-col items-center justify-center w-60 green-line">
                <div className="mb-3">
                    <Image
                        src="/img/icon-doc.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                </div>
                <span className="text-gray-600 font-semibold sub-title-content">Contract</span>
                <span className="text-2xl font-bold text-gray-800">60</span>
            </div>
            <div className="border rounded-xl p-4 flex flex-col items-center justify-center w-60 yellow-line">
                <div className="mb-3">
                    <Image
                        src={"/img/icon-ene.png"}
                        alt=""
                        width={50}
                        height={50}
                    />
                </div>
                <span className="text-gray-600 font-semibold sub-title-content">Supplier</span>
                <span className="text-2xl font-bold text-gray-800">13</span>
            </div>
        </div>

        {/* Donut Chart */}
        <div className="flex flex-col items-center">

            <div className="grid grid-cols-2 gap-6">
                
                <div className="w-100 h-100 relative">
                    <ResponsiveContainer>
                        <PieChart>
                        <Pie
                            data={data}
                            innerRadius={100}
                            outerRadius={180}
                            paddingAngle={1}
                            dataKey="value"
                            label={(entry) => entry.value}  // แสดงตัวเลขตรงกลาง section
                        >
                            {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold">{total} ea.</span>
                        <span className="text-sm text-gray-500">Total Contract</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="grid-cols-1 text-sm mt-30 pl-20">
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                        <span>Normal</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        <span>Warning</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                        <span>Delay</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span>Expired</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
        
    <div className="rounded-xl">
      {/* At Risk + Pending */}
      <div className="bg-white rounded-xl p-12 shadow-lg">
        
        <div className="flex justify-center items-center gap-6 mb-6">

            <div className="flex flex-col items-center p-4 border-2 border-red-500 rounded-2xl bg-white w-64 h-60">
                <div className="text-xl font-bold text-red-600 mb-4">
                    At Risk Contract
                </div>
                <div className="flex w-full">
                    <div className="flex-1 flex flex-col items-center justify-center border-r-2 border-gray-300 pr-4">
                        <div className="text-lg font-semibold text-gray-700">Warning</div>
                        <div className="flex justify-center items-end text-4xl font-bold text-gray-900 h-30">1</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center pl-4">
                        <div className="text-lg font-semibold text-gray-700">Delay</div>
                        <div className="flex justify-center items-end text-4xl font-bold text-gray-900 h-30">2</div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-center p-4 border-2 border-red-500 rounded-2xl bg-white w-64 h-60">
                <div className="text-xl font-bold text-red-600 mb-4">
                    Penging Action
                </div>
                <div className="flex w-full">
                    <div className="flex-1 flex flex-col items-center justify-center border-r-2 border-gray-300 pr-4">
                        <div className="text-lg font-semibold text-gray-700 text-center leading-tight">Pending Renewal Contract</div>
                        <div className="flex justify-center items-end font-bold text-gray-900 h-20 text-2xl">3</div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center pl-4">
                        <div className="text-lg font-semibold text-gray-700 text-center leading-tight">Pending Status Update</div>
                        <div className="flex justify-center items-end font-bold text-gray-900 h-20 text-2xl">8</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
          <div className="flex h-14"> 
            <div className="p-2 w-20">Delay</div> 
            <div className="bg-red-500 h-12 w-1/3"><span className="items-center justify-center flex pt-2 text-white font-bold text-2xl">2</span></div>
            <div className="bg-orange-400 h-12 w-2/3"><span className="items-center justify-center flex pt-2 text-white font-bold text-2xl">3</span></div>
          </div>

          <div className="flex">
            <div className="p-2 w-20">Warning</div> 
            <div className="bg-red-500 h-12 w-1/5"><span className="items-center justify-center flex pt-2 text-white font-bold text-2xl">1</span></div>
            <div className="bg-orange-400 h-12 w-4/5"><span className="items-center justify-center flex pt-2 text-white font-bold text-2xl">3</span></div>
          </div>
        </div>
        
      </div>

      {/* Top Vendors */}
      <div className="bg-white rounded-xl py-8 px-20 shadow-lg mt-6">
        <p className="font-bold mb-4 title-content">TOP 10 Vendor by Value</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData} layout="vertical">
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={80} />
            <Tooltip />
            <Bar dataKey="value" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

        </div>
    </div>
  );
};

export default Dashboard;
