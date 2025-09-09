export type ContractCenter = {
  no: string;
  number?: string;
  detail: string;
  amount: number;
  vendorName: string;
  type: string;
  department: string;
  status: 'Normal' | 'Warning' | 'Delay' | 'Expired';
  activity: string;
  timeRemain: number;
  timeTotal: number;
  usage: number;
};