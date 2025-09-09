export type Contract = {
  no: string;
  number?: string;
  detail: string;
  amount: number;
  vendorName: string;
  type: string;
  department: string;
  status: 'Normal' | 'Warning' | 'Delay' | 'Expired';
  activity: string;
};