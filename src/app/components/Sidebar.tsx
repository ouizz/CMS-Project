import { FC } from "react";
import Link from "next/link"; // make a link
import { usePathname } from "next/navigation"; // check path current for active
import Image from 'next/image';

const Sidebar: FC = () => {

    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
        
    return (
        <>
            <div className="w-64 bg-white p-4 rounded-xl shadow flex flex-col">
                <div className="text-center mb-4">
                    <h1 className="text-4xl font-bold">CMS</h1>
                    <br/>
                    <Image
                        src="/img/150.jpeg"
                        alt="User"
                        width={64}  // 16 * 4 (based on your class "w-16 h-16")
                        height={64} // 16 * 4 (based on your class "w-16 h-16")
                        className="rounded-full mx-auto my-2"
                    />
                    <p className="text-gray-700 font-bold">User: XXXSSS</p>
                    <p className="text-gray-700 font-bold">Department: XXX</p>
                </div>
                <Link href="/dashboard">
                    <button className={`bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded mb-4 transition-colors ${
                        isActive("/dashboard")
                            ? "bg-green-600 text-white"
                            : "bg-green-500 hover:bg-green-600 text-white"
                        }`}>
                        Contract Dashboard
                    </button>
                </Link>
                <div className="flex flex-col space-y-2">
                    <Link href="/contract-center">
                        <div className={`text-gray-500 font-semibold ${
                            isActive("/contract-center") ? "bg-green-600 text-white font-semibold rounded px-2 py-1" : ""
                        }`}>
                        Contract Center</div>
                    </Link>
                    <div className="pl-4 flex flex-col space-y-1 line-left-border">
                        {/* Renewal Update */}
                        <Link href="/contract-center-renewal">
                            <div
                                className={`flex justify-between items-center cursor-pointer ${
                                    isActive("/contract-center-renewal")
                                    ? "bg-green-600 text-white font-semibold rounded px-2 py-1"
                                    : "text-gray-400 hover:text-gray-800"
                                }`}
                                >
                                <span>Renewal Update</span>
                                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">3</span>
                            </div>
                        </Link>
                        {/* Update Status */}
                        <Link href="/contract-center-update-status">
                            <div
                                className={`flex justify-between items-center cursor-pointer ${
                                    isActive("/contract-center-update-status")
                                    ? "bg-green-600 text-white font-semibold rounded px-2 py-1"
                                    : "text-gray-400 hover:text-gray-800"
                                }`}
                                >
                                <span>Update Status</span>
                                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">8</span>
                            </div>
                        </Link>
                    </div>
                    {/* Contract Reports */}
                    <Link href="/contract-reports">
                        <div
                            className={`text-gray-500 font-semibold mt-2 hover:text-gray-800 cursor-pointer ${
                            isActive("/contract-reports") ? "bg-green-600 text-white font-semibold rounded px-2 py-1" : ""
                            }`}
                        >
                            Contract ReportS
                        </div>    
                    </Link>
                </div>
            </div>
        </>
  );
};

export default Sidebar;
