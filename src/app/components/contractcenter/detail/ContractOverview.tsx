import { useState } from "react";
import { ContractProgrssBar } from "./ContractProgrssBar";

const ContractOverview = () => {
    const steps = [
        {
            id: 1,
            title: "User Action",
            label: "อยู่ในกระบวนการ TOR และ หลักการ",
            date: "01/07/2568",
            status: "ดำเนินการร่าง TOR เรียบร้อย",
        },
        {
            id: 2,
            title: "User Action",
            label: "อนุมัติ PR เรียบร้อย",
            ref: "PR : 13010101010",
            subRef: "คปFMT XXX/2568",
            date: "01/07/2568",
            status: "PR อนุมัติแล้ว",
        },
        {
            id: 3,
            title: "Buyer Action",
            label: "อยู่ในกระบวนการจัดซื้อ",
            comment: true,
            date: "01/07/2568",
        },
        {
            id: 4,
            title: "Buyer Action",
            label: "อนุมัติ PO เรียบร้อย",
            ref: "PO : 30XXXXXX",
            comment: true,
            date: "01/07/2568",
        },
        {
            id: 5,
            title: "Buyer Action",
            label: "สัญญาลงนามเรียบร้อย",
            comment: true,
            date: "01/07/2568",
        },
    ];

    const [date , setDate] = useState(new Date().toISOString().split("T")[0]);
    
    return (
    <div className="space-y-6">
        
      {/* Progress Bars */}
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

      <div className="grid grid-cols-[30%_auto]">
        {/* Condition */}
        <div className="border border-dashed border-green-500 rounded-lg p-3 w-42 h-25">
            <p className="text-sm font-semibold mb-2">เงื่อนไขสัญญา</p>
            <label className="flex items-center space-x-2 text-sm">
            <input type="radio" name="condition" className="text-blue-600" />
            <span>สัญญาต่อเนื่อง</span>
            </label>
            <label className="flex items-center space-x-2 text-sm mt-1">
            <input type="radio" name="condition" className="text-blue-600" />
            <span>ไม่มีต่อสัญญา</span>
            </label>
        </div>

        {/* Approver Section */}
        <div className="space-y-2">
            <label className="text-sm font-semibold"><span className="text-red-500">*</span> Select Approver</label>
            <div className="grid grid-cols-[20%_15%_15%]">
                <div className="pr-3">
                    <select
                        className="border border-gray-300 rounded px-3 py-2 text-sm flex-1 w-full"
                    >
                        <option value=''>Weera </option>
                        <option value=''>Ouizzy </option>
                        <option value=''>Methaphattharanon </option>
                        <option value=''>Peera </option>
                        <option value=''>Saebe </option>
                    </select>
                </div>
                <div className="pr-3">
                    <input 
                        type="file" 
                        className="bg-purple-800 rounded w-37 h-9 text-center text-white p-1 pl-2 w-full" 
                        placeholder="Select File"
                    />
                </div>
                <div className="items-center rounded px-3 py-1 bg-white shadow text-gray-600 text-right">
                    <span className="mr-2">ข้อตกลง.pdf</span>
                    <button className="text-gray-400 hover:text-red-500 font-bold">×</button>
                </div>
            </div>
            <div className="grid grid-cols-[50%_30%]">
                <textarea
                    placeholder="Comment"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm mt-2"
                />
                <div className="flex items-center gap-4 mt-2 pl-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 text-xl h-15">
                        Submit
                    </button>
                    <p className="text-sm">
                        <span className="font-semibold">Status : </span><br/>
                        <span className="text-red-500 font-bold">Renewal Update</span>
                    </p>
                </div>
            </div>
        </div>
      </div>

        {/* Next Contract Action */}
        <div className="p-6 pt-2 bg-white">
            <h2 className="text-sm text-gray-500 mb-4">Next Contract Action</h2>
            <div className="border border-dashed border-gray-400 mb-6"></div>
            <div className="border rounded-2xl pt-8 pb-8 border-gray-400">
                <div className="grid grid-cols-[40%_60%] mb-3">
                    <div className="text-green-600 text-center font-bold">User Action</div>
                    <div className="text-blue-600 text-center font-bold">Buyer Action</div>
                </div>
                <div className="grid grid-cols-5 relative">
                    {steps.map((step, index) => (
                        <div 
                            key={step.id} 
                            className={`flex flex-col items-center px-4 relative z-[1] ${index === 1 ? "" : "" }`}
                        >
                            <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold">
                                {step.id}
                            </div>

                            <div className="h-20">
                                {/* Label */}
                                <p className="text-center text-l mt-1 pt-2 pb-2">{step.label}</p>

                                {/* Ref (PR/PO) */}
                                {step.ref && (
                                <p className="text-xs font-semibold text-blue-600">{step.ref}</p>
                                )}
                                {step.subRef && (
                                <p className="text-xs text-red-500">{step.subRef}</p>
                                )}
                            </div>

                            {/* Date */}
                            {step.date && (
                                <>
                                <div>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="border rounded px-2 py-1 text-xs text-center mt-2 border-gray-300 w-full"
                                    />
                                </div>
                                <div>
                                    <textarea 
                                        className="text-blue-500 text-m p-2 border border-gray-300 mt-2 rounded placeholder:text-xs placeholder:text-gray-400" 
                                        placeholder={step.status}
                                    >
                                    </textarea>
                                </div>
                                </>
                            )}

                            {/* Status / Comment */}
                            {/* {step.status && (
                                <p className="text-xs text-blue-500 mt-1"></p>
                            )}
                            {step.comment && (
                                <input
                                    type="text"
                                    placeholder="Comment"
                                    className="border rounded px-2 py-1 text-xs text-center mt-2"
                                />
                            )} */}

                            {/* เส้นเชื่อม */}
                            {index < steps.length && (
                                <>
                                    {index === 0 ? (
                                        <div className="absolute top-4 right-0 border-t border-dashed border-purple-500 z-[-1] w-[50%]"></div>
                                     ) : index === 1 ? (
                                        <>
                                        <div className="absolute top-4 right-0 border-t border-dashed border-purple-500 z-[-1]  w-[100%] ml-60"></div>
                                        <div className="absolute right-0 bottom-0 border-r border-gray-400 h-50"></div>
                                        </>
                                    ) : index === 4 ? (
                                        <div className="absolute top-4 left-0 border-t border-dashed border-purple-500 z-[-1] w-[50%]"></div>
                                    ) : (
                                        <div className="absolute top-4 right-0 border-t border-dashed border-purple-500 z-[-1]  w-[100%] ml-60 "></div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContractOverview