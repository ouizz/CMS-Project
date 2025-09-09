interface ContractProgressBarProps {
  timeRemainDays: number;
  totalDays: number;
  usage: number;
  usageTotal: number;
  warrantee: string;
  startDate: string;
  endDate: string;
  status: string;
}

export const ContractProgrssBar = ({
  timeRemainDays,
  totalDays,
  usage,
  usageTotal,
  warrantee,
  startDate,
  endDate,
  status,
} : ContractProgressBarProps ) => {

    const timePercent = (timeRemainDays / totalDays) * 100;
    const usagePercent = (usage / usageTotal) * 100;

  return (
    <>
        <div className="bg-gray-200 rounded-2xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
            {/* Time Remain */}
            <div className="pr-10 border-r border-[#ccc]">
            <p className="text-sm font-semibold">Time Remain</p>
            <div className="w-full bg-gray-400 rounded-full h-4 mt-1">
                <div
                className="bg-yellow-400 h-4 rounded-full"
                style={{ width: `${timePercent}%` }}
                />
            </div>
            <p className="text-xs mt-1 text-center">
                <span className="text-yellow-600 font-semibold">{timeRemainDays} Days</span> / {totalDays} Days
            </p>
            </div>

            {/* Usage */}
            <div className="pr-10 pl-10 border-r border-[#ccc]">
            <p className="text-sm font-semibold">Usage</p>
            <div className="w-full bg-gray-400 rounded-full h-4 mt-1">
                <div
                className="bg-yellow-400 h-4 rounded-full"
                style={{ width: `${usagePercent}%` }}
                />
            </div>
            <p className="text-xs mt-1 text-center">
                <span className="text-yellow-600 font-semibold">{usage.toLocaleString()}</span> / {usageTotal.toLocaleString()} Bath
            </p>
            </div>

            {/* Warranty */}
            <div className="pr-10 pl-10 border-r border-[#ccc] grid">
            <div>
                <p className="text-sm font-medium">
                Warrantee: <span className="font-semibold">{warrantee}</span>
                </p>
            </div>
            <div>
                <p className="text-sm">
                <span className="mr-5">Start: <span className="font-semibold">{startDate}</span></span>
                End: <span className="font-semibold">{endDate}</span>
                </p>
            </div>
            </div>

            {/* Status */}
            <div className="pl-10 text-center">
            <p className="text-sm">
                <span className="font-semibold">Current Status:</span>
            </p>
            <p className="text-sm">
                <span className={`font-bold text-2xl ${status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{status}</span>
            </p>
            </div>
        </div>
        </div>
    </>
  )
}
