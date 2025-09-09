type Props = {
  status: string;
};
const getBadgeClasses = (status: string) => {
    switch (status) {
        case 'Normal':
            return 'bg-green-200 text-green-800';
        case 'Warning':
            return 'bg-green-200 text-green-800';
        case 'Delay':
            return 'bg-yellow-200 text-yellow-800';
        case 'Expired':
            return 'bg-red-200 text-red-800';
        default:
            return 'bg-gray-200 text-gray-800';
  }
}
const StatusBadge = ({ status }: Props) => {
    console.log("StatusBadge rendered with status:", status);
    const badgeClasses = getBadgeClasses(status.trim());
    return (
    <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium ${badgeClasses}`}>
        {status}
    </span>
    );
};

export default StatusBadge;