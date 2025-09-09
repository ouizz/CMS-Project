import { useReactTable, getCoreRowModel, ColumnDef , flexRender} from '@tanstack/react-table';

interface DataRow {
  date: string;
  actionEvent: string;
  user: string;
  source: string;
}

const data: DataRow[] = [
  { date: '22/07/2568 11:00:45', actionEvent: 'Update เงื่อนไขสัญญา', user: 'SOMSRIM', source: 'CMS' },
  { date: '22/07/2568 12:00:45', actionEvent: 'Approve เงื่อนไขสัญญา', user: 'SOMSAK.D (Manager)', source: 'CMS' },
  { date: '22/07/2568 14:30:15', actionEvent: 'Update อยู่ในกระบวนการ TOR และ หลักฐาน', user: 'SOMSRIM', source: 'CMS' },
  { date: '22/07/2568 15:30:15', actionEvent: 'Update เลขหลักฐาน', user: 'SOMSRIM', source: 'CMS' },
  { date: '22/07/2568 15:30:15', actionEvent: 'อนุมัติ PR เรียบร้อย', user: 'SYSTEM', source: 'SAP' },
  { date: '23/07/2568 15:20:20', actionEvent: 'Update อยู่ในกระบวนการจัดซื้อ [ใบสั่งซื้อ]', user: 'CHENPOP.P', source: 'CMS' },
  { date: '23/07/2568 16:00:15', actionEvent: 'อนุมัติ PO เรียบร้อย', user: 'SYSTEM', source: 'SAP' },
  { date: '23/07/2568 17:00:15', actionEvent: 'Update สัญญาลงนามเรียบร้อย [ใบสั่งซื้อ]', user: 'CHENPOP.P', source: 'CMS' },
];

const columns: ColumnDef<DataRow>[] = [
  {
    header: 'Date & Time',
    accessorKey: 'date',
  },
  {
    header: 'Action / Event',
    accessorKey: 'actionEvent',
  },
  {
    header: 'User',
    accessorKey: 'user',
  },
  {
    header: 'Source',
    accessorKey: 'source',
  },
];


const ContractActivityLog = () => {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    
  return (
    <div className="overflow-x-auto  shadow-lg border">
      <table className="min-w-full table-auto border-0">
        <thead className="bg-blue-950 text-white h-15">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr 
                key={headerGroup.id}
            >
              {headerGroup.headers.map((column) => (
                <th key={column.id} className="px-4 py-2 text-2xl font-semibold">
                  {column.column.columnDef.header?.toString()}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr 
                key={row.id}
                className='h-13'
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 text-sm text-gray-600 border border-b-cyan-950 text-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContractActivityLog