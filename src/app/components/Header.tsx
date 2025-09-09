import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
    <div className="flex gap-2">
        <div className="relative">
            <select className="border rounded p-2 pr-4 w-30 appearance-none text-gray-400">
                <option>Year</option>
            </select>
            <svg className="absolute top-1/2 left-23 transform -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
        
        <div className="relative">
            <select className="border rounded p-2 pr-4 w-30 appearance-none text-gray-400">
                <option>Status</option>
            </select>
            <svg className="absolute top-1/2 left-23 transform -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>

        {/* ทำแบบเดียวกันกับ select ที่เหลือ */}
        <div className="relative">
            <select className="border rounded p-2 pr-4 w-30 appearance-none text-gray-400">
                <option>Team</option>
            </select>
            <svg className="absolute top-1/2 left-23 transform -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
        
        <div className="relative">
            <select className="border rounded p-2 pr-4 w-30 appearance-none text-gray-400">
                <option>Vendor</option>
            </select>
            <svg className="absolute top-1/2 left-23 transform -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
        
        <div className="relative">
            <select className="border rounded p-2 pr-4 w-30 appearance-none text-gray-400">
                <option>Purchaser</option>
            </select>
            <svg className="absolute top-1/2 left-23 transform -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>
        
        <div className="relative">
            <select className="border rounded p-2 pr-4 w-30 appearance-none text-gray-400">
                <option>Type</option>
            </select>
            <svg className="absolute top-1/2 left-23 transform -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
        </div>

    </div>
    </header>
  );
};

export default Header;
