import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  flexRender 
} from '@tanstack/react-table';
import type { Contract } from '../../types/contract';
import StatusBadge from './StatusBadge';
import { useState } from 'react';
import ContractOverview from './detail/ContractOverview';
import ContractDetail from './detail/ContractDetail';
import ContractVendorDetail from './detail/ContractVendorDetail';
import ContractItemDetail from './detail/ContractItemDetail';
import ContractActivityLog from './detail/ContractActivityLog';

type Props = {
  data: Contract[];
};

const columns: ColumnDef<Contract>[] = [
   {
    id: 'contractInfo',
    header: 'Contract',
    cell: ({ row }) => {
      const no = row.original.no;
      const detail = row.original.detail;

      return (
        <div className="flex flex-col">
          <span className="font-medium text-gray-800">No. {no}</span>
          <span className="text-sm text-gray-500">{detail}</span>
        </div>
      );
    },
  },
    {
    accessorKey: 'amount',
    header: 'Amount',
    cell: info => `฿${Number(info.getValue()).toLocaleString()}`,
  },
  {
    accessorKey: 'no',
    header: 'Contract No.',
  },
  {
    accessorKey: 'vendorName',
    header: 'Vendor',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row  }) => <StatusBadge status={row.original.status as string} />,
  },
  {
    accessorKey: 'activity',
    header: 'Activity',
    cell: ({ row  }) => <StatusBadge status={row.original.activity as string} />,
  },
  
];

const tabs = [
  { id: "overview", label: "Contract Overview" },
  { id: "detail", label: "Contract Detail" },
  { id: "vendor", label: "Vendor Detail" },
  { id: "item", label: "Item Detail" },
  { id: "attachment", label: "Attachment" },
  { id: "log", label: "Activity Log" }
]

const DataTable = ({ data }: Props) => {
  
  const [selectedRow , setSelectedRow] = useState<unknown  | null>(null);
  const [activeTab , setActiveTab] = useState("overview");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
        pagination: {
            pageSize: 10,
        },
    },
  });

  return (
    <>
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="min-w-full table-auto">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-4 text-left">
                  {header.isPlaceholder ? null : header.column.columnDef.header?.toString()}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr 
              key={row.id} 
              className="border-t hover:bg-gray-50"
              onClick={() => { 
                setSelectedRow(row.original) 
                setActiveTab("overview")
              }}
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-200">
        <span className="text-sm text-gray-700">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <div className="flex space-x-2">
          {/* Previous Page Button */}
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {'<< Prev'}
          </button>
          
          {/* Page Numbers */}
          {table.getPageCount() > 0 &&
            [...Array(table.getPageCount()).keys()].map(page => (
              <button
                key={page}
                onClick={() => table.setPageIndex(page)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  table.getState().pagination.pageIndex === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {page + 1}
              </button>
            ))}

          {/* Next Page Button */}
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {'Next >>'}
          </button>
        </div>
      </div>
    </div>

    {/* Popup */}
    {selectedRow && (
      <div
        className="fixed inset-0 z-50 flex justify-center bg-gray-400 bg-opacity-50 transition-opacity"
        onClick={() => setSelectedRow(null)}
      >
        <div
          className="absolute bottom-0 w-full max-h-[92%] h-[92%]
            bg-white rounded-t-2xl shadow-xl p-6 
            transform transition-transform duration-300 ease-out
            animate-slide-up
          "
          onClick={e => e.stopPropagation()} // กันคลิกทะลุ
        >
          <button
            className="px-4 py-2  text-white hover:bg-blue-600 absolute top-0 right-4 -mt-17 text-white-500 text-3xl font-bold bg-red-700 rounded-4xl"
            onClick={() => setSelectedRow(null)}
          >
            ×
          </button>


          {/*:::: Content :::: */}
          <div className="w-full mx-auto bg-white p-0 pl-3 pr-3"> {/* max-w-6xl */}
            {/* Header Info */}
            <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
              
              <div>
                <p>
                  <span className="font-semibold">Contract No : </span>300XXXXXX
                </p>
                <p>
                  <span className="font-semibold">เลขหลักการ : </span>คป.ลบ.XXX/2568
                </p>
                <p>
                  <span className="font-semibold">Status : </span>
                  <span className="text-orange-500 font-semibold">Warning</span>
                </p>
              </div>
              <div className='flex'>
                <div className="w-48">
                  <p>
                    <span className="font-semibold">Contract Name : </span>
                  </p>
                </div>
                <div>
                  <p>
                    สัญญาจะซื้อจะขายแบบราคาที่ไม่จำกัดปริมาณ รายการ หลอดไฟ สายไฟ อุปกรณ์ ประกอบกางไฟฟ้า และอุปกรณ์งานช่สงทั่วไป จำนวน 107 รายการ
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Amount : </span>810,000
                </p>
                <p>
                  <span className="font-semibold">Period : </span>
                  01/06/2568 – 01/06/2569
                </p>
                <p>
                  <span className="font-semibold">Contract Type : </span>
                  <span className="text-red-600 font-semibold">
                    สัญญาจะซื้อ (Price list)
                  </span>
                </p>
              </div>

            </div>

            {/* Tabs */}
            <div className="flex border-t border-gray-200 pt-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 -mb-px text-sm font-medium border-b-2 transition-colors duration-200
                    ${
                      activeTab === tab.id
                        ? "font-semibold text-gray-600 bg-gray-300 rounded-xl"
                        : "border-transparent text-gray-500 hover:text-gray-600 hover:font-bold"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {activeTab === "overview" && <ContractOverview /> }
              {activeTab === "detail" && <ContractDetail/> }
              {activeTab === "vendor" && (<ContractVendorDetail/>)}
              {activeTab === "item" && (<ContractItemDetail/>)}
              {activeTab === "attachment" && (
                <p className="text-gray-600">IWebFormLink</p>
              )}
              {activeTab === "log" && (<ContractActivityLog/>)}
            </div>
          </div>
          {/*:::: Content :::: */}
      
        </div>
      </div>
    )}
    
    </>

  );
};

export default DataTable;
