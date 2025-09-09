import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  flexRender 
} from '@tanstack/react-table';
import type { ContractCenter } from '../../types/contractCenter';
import StatusBadge from './StatusBadge';
import ProgressBar from './ProgressBar';

type Props = {
  data: ContractCenter[];
};

const columns: ColumnDef<ContractCenter>[] = [
   {
    id: 'contractInfo', // กำหนด id เอง เพราะไม่ใช้ accessorKey
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
  // {
  //   accessorKey: 'detail',
  //   header: 'Description',
  // },
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
  {
    accessorKey: 'timeRemain',
    header: 'Time Remain',
    cell: ({ row }) => {
      const remain = row.original.timeRemain;   // เช่น 82
      const total = row.original.timeTotal;     // เช่น 160
      return (
        <ProgressBar
          value={remain}
          total={total}
          label={`${remain} Days`}
          color={remain <= 10 ? "bg-red-500" : "bg-orange-500"}
        />
      );
    }
  },
  {
    accessorKey: 'usage',
    header: 'Usage',
    cell: ({ row }) => {
      const usage = row.original.usage;         // เช่น 410000
      const total = row.original.amount;        // เช่น 810000
      return (
        <ProgressBar
          value={usage}
          total={total}
          label={usage.toLocaleString()}
          color={usage >= total ? "bg-red-500" : "bg-green-500"}
        />
      );
    }
  },
];

const CenterDataTable = ({ data }: Props) => {
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
            <tr key={row.id} className="border-t hover:bg-gray-50">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 py-4">
                   {/* {
                      cell.column.id === 'status' || cell.column.id === 'activity'
                        ? cell.renderValue() as React.ReactNode
                        : cell.renderValue() as React.ReactNode
                    } */}
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
  );
};

export default CenterDataTable;
