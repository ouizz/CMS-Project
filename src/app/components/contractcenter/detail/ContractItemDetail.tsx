import React, { useState } from 'react'
import { ContractProgrssBar } from './ContractProgrssBar';

interface Order {
    materialCode: string;
    shortText: string;
    unit: string;
    targetQuantity: number;
    grQuantity: number;
    balance: number;
    prNumber: string;
    poDetails: Array<{
        poNumber: string;
        grNumber: string;
        quantity: number;
        createDate: string;
    }>;
}

const orders: Order[] = [
  {
    materialCode: '100XXXX',
    shortText: 'XXXX',
    unit: 'PCS',
    targetQuantity: 20,
    grQuantity: 5,
    balance: 15,
    prNumber: '13XXXX',
    poDetails: [
      {
        poNumber: 'PO No: XXXXXXXXX',
        grNumber: 'GR No: XXXXXXXXX',
        quantity: 2,
        createDate: '23/06/2568',
      },
      {
        poNumber: 'PO No: XXXXXXXXX',
        grNumber: 'GR No: XXXXXXXXX',
        quantity: 2,
        createDate: '23/06/2568',
      },
      {
        poNumber: 'PO No: XXXXXXXXX',
        grNumber: 'GR No: XXXXXXXXX',
        quantity: 2,
        createDate: '23/06/2568',
      },
    ],
  },
  {
    materialCode: '100XXXX',
    shortText: 'XXXX',
    unit: 'PCS',
    targetQuantity: 1,
    grQuantity: 6,
    balance: 4,
    prNumber: '13XXXX',
    poDetails: [
      {
        poNumber: 'PO No: XXXXXXXXX',
        grNumber: 'GR No: XXXXXXXXX',
        quantity: 2,
        createDate: '23/06/2568',
      },
      {
        poNumber: 'PO No: XXXXXXXXX',
        grNumber: 'GR No: XXXXXXXXX',
        quantity: 2,
        createDate: '23/06/2568',
      },
      {
        poNumber: 'PO No: XXXXXXXXX',
        grNumber: 'GR No: XXXXXXXXX',
        quantity: 2,
        createDate: '23/06/2568',
      },
    ],
  },
  {
    materialCode: '100XXXX',
    shortText: 'XXXX',
    unit: 'XX',
    targetQuantity: 100,
    grQuantity: 90,
    balance: 10,
    prNumber: '13XXXX',
    poDetails: [],
  },
];


const ContractItemDetail = () => {

    const [expandedRows , setExpandedRows] = useState<Set<number>>(new Set())

    const toggleRowExpansion = (index: number) => {
        setExpandedRows((prev) => {
            const newExpandedRows = new Set(prev);
        
            if (newExpandedRows.has(index)) {
                newExpandedRows.delete(index); // ย่อข้อมูล
            } else {
                newExpandedRows.add(index); // ขยายข้อมูล
            }
            return newExpandedRows;
        });
    };


  return (
    <>
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
    
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200 mt-6">
        <table className="min-w-full table-auto">
            <thead className="bg-gray-100 h-14">
                <tr>
                    <th className="text-left text-m font-semibold text-gray-600 w-20"></th>
                    <th className="px-4 py-2 text-left text-m font-semibold text-gray-600">#</th>
                    <th className="px-4 py-2 text-left text-m font-semibold text-gray-600">Material Code</th>
                    <th className="px-4 py-2 text-left text-m font-semibold text-gray-600">Short Text</th>
                    <th className="px-4 py-2 text-left text-m font-semibold text-gray-600">Unit</th>
                    <th className="px-4 py-2 text-center text-m font-semibold text-gray-600">Target Quantity</th>
                    <th className="px-4 py-2 text-center text-m font-semibold text-gray-600">GR Quantity</th>
                    <th className="px-4 py-2 text-left text-m font-semibold text-gray-600">Balance</th>
                    <th className="px-4 py-2 text-left text-m font-semibold text-gray-600">PR Number</th>
                </tr>
            </thead>
            <tbody>
            {orders.map((order, index) => (
                <React.Fragment key={index}>
                    <tr className="border-t h-17">
                        <td className="text-l text-center">
                            <button
                                onClick={() => toggleRowExpansion(index)}
                                className="text-gray-500 hover:text-gray-700 cursor-pointer  bg-gray-300 w-10 h-10 rounded-3xl text-2xl"
                            >
                                {expandedRows.has(index) ? '-' : '+'}
                            </button>
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600">{index + 1}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">{order.materialCode}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">{order.shortText}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">{order.unit}</td>
                        <td className="px-4 py-2 text-sm text-gray-600 text-center">{order.targetQuantity}</td>
                        <td className="px-4 py-2 text-sm text-gray-600 text-center">{order.grQuantity}</td>
                        <td className="px-4 py-2 text-sm">
                            <span
                                className={
                                order.balance > 50
                                    ? 'text-green-500'
                                    : order.balance > 20
                                    ? 'text-yellow-500'
                                    : 'text-red-500'
                                }
                            >
                                {order.balance} ({order.balance > 50 ? '>' : order.balance > 20 ? '50%' : '20%'})
                            </span>
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600">{order.prNumber}</td>
                    </tr>

                    {expandedRows.has(index) && order.poDetails.length > 0 && (
                        <tr>
                        <td colSpan={8} className="px-4 py-2 text-sm text-gray-600">
                            <table className="min-w-full mt-2 table-auto ml-12">
                            {/* <thead className="bg-gray-50">
                                <tr>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">PO Number</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">GR Number</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Quantity</th>
                                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Create Date</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {order.poDetails.map((po, poIndex) => (
                                <tr 
                                    key={poIndex}
                                    className='h-10'
                                >
                                    <td className="px-4 py-2 text-sm text-gray-600">{po.poNumber}</td>
                                    <td className="px-4 py-2 text-sm text-gray-600">{po.grNumber}</td>
                                    <td className="px-4 py-2 text-sm text-gray-600">Unit : {po.grNumber}</td>
                                    <td className="px-4 py-2 text-sm text-gray-600">Quantity : {po.quantity}</td>
                                    <td className="px-4 py-2 text-sm text-gray-600">Create Date : {po.createDate}</td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </td>
                        </tr>
                    )}
                </React.Fragment>
            ))}
            </tbody>
        </table>
        </div>
    </>
  )
}

export default ContractItemDetail