"use client";
import { useState } from "react";
import { ContractProgrssBar } from "./ContractProgrssBar";

const ContractVendorDetail = () => {

    const [emails, setEmails] = useState<string[]>(["somying.r@worklogic.com", "somchai.r@worklogic.com"]);
    // const [inputValue, setInputValue] = useState("");

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Enter" && inputValue.trim() !== "") {
    //     setEmails([...emails, inputValue.trim()]);
    //     setInputValue("");
    //     e.preventDefault();
    //     }
    //     if (e.key === "Backspace" && inputValue === "") {
    //     setEmails(emails.slice(0, -1));
    //     }
    // };

    const removeEmail = (index: number) => {
        setEmails(emails.filter((_, i) => i !== index));
    };

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
                <div className="grid grid-cols-[20%_50%_27%] gap-5 mb-8">
                    <div className="relative z-0 w-full">
                         <input 
                            type="text" 
                            name="" 
                            id="vendorcode" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                            defaultValue='300XXXXXX'
                        />
                        <label 
                            htmlFor="vendorcode" 
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Vendor Code :
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
                                defaultValue='บริษัท ฮตืตาชน'
                            />
                            <label 
                                htmlFor="contractstartdate" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Vendor Name :
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
                                defaultValue='XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
                            />
                            <label 
                                htmlFor="contractenddate" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Tax ID :
                            </label>
                        </div>
                    </div>
                </div>


                <div className="mb-8">
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
                            Vendor Address :
                        </label>
                    </div>
                </div>


                <div className="grid grid-cols-[60%_39%] gap-4 mb-8">
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
                                className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-1 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
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
                </div>

                {/* Contract Detail */}
                <div className="mb-8">
                    <div className="relative z-0 w-full">
                        
                        <div className="mb-6">
                            <label 
                                htmlFor="contract-responsible-person" 
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                            Vendor Email :
                            </label>
                        </div>
                        <br/>

                        <div className="border border-gray-600 rounded-lg p-2 flex flex-wrap gap-2 min-h-[90px]">
                            {emails.map((email, index) => (
                                <div key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center gap-1 h-10">
                                <span className="text-sm">{email}</span>
                                <button
                                    type="button"
                                    className="text-gray-500 hover:text-gray-700"
                                    onClick={() => removeEmail(index)}
                                >
                                    ×
                                </button>
                                </div>
                            ))}
                            {/* <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 min-w-[120px] border-none focus:ring-0 outline-none text-sm"
                                placeholder="Add email..."
                            /> */}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

  )
}

export default ContractVendorDetail