type Props = {
  value: number;      // ค่าที่ใช้จริง เช่น 52
  total: number;      // ค่าเต็ม เช่น 100
  label: string;      // ข้อความด้านบน เช่น "82 Days" หรือ "410,000"
  color?: string;     // tailwind class ของสี เช่น bg-orange-500
};

const ProgressBar = ({ value, total, label, color = "bg-orange-500" }: Props) => {
  const percentage = Math.min(100, Math.round((value / total) * 100));

  return (
    <div className="flex flex-col w-full">
      
      {/* Label */}
      <span className="text-sm text-gray-700 mb-1">{label}</span>
      
      {/* Progress background */}
      <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden">
         <div
            className={`${color} h-5 flex items-center justify-center text-white text-xs font-medium`}
            style={{ width: `${percentage}%` }}
        >
            {percentage > 0 && `${percentage}%`}
        </div>
      </div>

      {/* Percentage */}
      {/* <span className="text-xs text-gray-500 mt-1">{percentage}%</span> */}
    </div>
  );
};

export default ProgressBar
