"use client";
import { ContractProgrssBar } from "./ContractProgrssBar";

export default function ContractDetail() {
  return (
    <div className="space-y-6">
        <ContractProgrssBar
            timeRemainDays={82}
            totalDays={190}
            usage={410000}
            usageTotal={810000}
            warrantee="1 Years 0 Month 0 Days"
            startDate="01/06/2569"
            endDate="01/06/2570"
            status="Active"
        />
        <div className="p-0">
            <div className="p-10 border rounded-lg space-y-4 border-gray-400">
                {/* Contract Name */}
                <div className="mb-6">
                    <div className="relative z-0 w-full mb-6">
                        <input 
                            type="text" 
                            name="" 
                            id="contractname" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                            defaultValue='สัญญาจะซื้อจะขายแบบราคาคงที่ไม่จำกัดปริมาณ รายการ หลอดไฟ สายไฟ อุปกรณ์ประกอบทางไฟฟ้า และอุปกรณ์งานซ่อมทั่วไป จำนวน 107 รายการ'
                        />
                        <label 
                            htmlFor="contractname" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Contract Name :
                        </label>
                    </div>
                </div>

                {/* SAP No & Dates */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="relative z-0 w-full">
                         <input 
                            type="text" 
                            name="" 
                            id="contractname" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                            defaultValue='300XXXXXX'
                        />
                        <label 
                            htmlFor="contractname" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            เลขที่สัญญา / SAP No :
                        </label>
                    </div>
                    <div>
                        <div className="relative z-0 w-full">
                            <input 
                                type="text" 
                                name="" 
                                id="contractstartdate" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                placeholder=" " 
                                required 
                                defaultValue='01/06/2568'
                            />
                            <label 
                                htmlFor="contractstartdate" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                วันที่เริ่มสัญญา :
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative z-0 w-full">
                            <input 
                                type="text" 
                                name="" 
                                id="contractenddate" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                placeholder=" " 
                                required 
                                defaultValue='01/06/2568'
                            />
                            <label 
                                htmlFor="contractenddate" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                วันที่สิ้นสุดสัญญา :
                            </label>
                        </div>
                    </div>
                </div>

                {/* Contract Type */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                        <div className="relative z-0 w-full">
                            <input 
                                type="text" 
                                name="" 
                                id="contracttype" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                placeholder=" " 
                                required 
                                defaultValue='01/06/2568'
                            />
                            <label 
                                htmlFor="contracttype" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                ประเภทสัญญา :
                            </label>
                        </div>
                    </div>
                <div>
                        <div className="relative z-0 w-full">
                            <input 
                                type="text" 
                                name="" 
                                id="contract-responsible-person" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                placeholder=" " 
                                required 
                                defaultValue='นาย XXXX YYYYY'
                            />
                            <label 
                                htmlFor="contract-responsible-person" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                ผู้รับผิดชอบสัญญา :
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="relative z-0 w-full">
                            <input 
                                type="text" 
                                name="" 
                                id="contract-responsible-department" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                placeholder=" " 
                                required 
                                defaultValue='FMT'
                            />
                            <label 
                                htmlFor="contract-responsible-department" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                หน่วยงานเจ้าของสัญญา :
                            </label>
                        </div>
                    </div>
                </div>

                {/* Contract Detail */}
                <div className="mb-6">
                    <div>
                        <div className="relative z-0 w-full">
                            <input 
                                type="text" 
                                name="" 
                                id="contract-detail" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                placeholder=" " 
                                required 
                                defaultValue='สัญญาจะซื้อจะขายแบบราคาคงที่ไม่จำกัดปริมาณ รายการ หลอดไฟ สายไฟ อุปกรณ์ประกอบทางไฟฟ้า
                        และอุปกรณ์งานซ่อมทั่วไป จำนวน 107 รายการ XXXXXXXXXXXXXXXX'
                            />
                            <label 
                                htmlFor="contract-detail" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                วัตถุประสงค์และรายละเอียด :
                            </label>
                        </div>
                    </div>
                </div>

                {/* Warranty */}
                <div>
                    <div className="relative z-0 w-full">
                        <input 
                            type="text" 
                            name="" 
                            id="contract-type-warranty" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                            defaultValue='Count by Complete GR'
                        />
                        <label 
                            htmlFor="contract-type-warranty" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Type of Warranty detail :
                        </label>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}
