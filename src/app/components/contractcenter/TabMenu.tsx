import React from 'react';

type Props = {
  currentTab: TabOption;
  onChange: (tab: TabOption) => void;
};

export type TabOption = typeof tabData[number]['label'];
export type TabItem = typeof tabData[number];

export const tabData = [
  { label: 'All', count: 12 },
  { label: 'Update Status', count: 3 },
  { label: 'Wait PR Approve', count: 1 },
  { label: 'Wait Buyer Action', count: 2 },
  { label: 'Wait PO Approve', count: 1 },
  { label: 'Wait Signed Contract', count: 1 },
] as const;

const TabMenu = ({ currentTab, onChange }: Props) => {
  return (
    <div className="flex space-x-6 border-b border-gray-300">
      {tabData.map((tab) => {
        const isActive = currentTab === tab.label;
        const activeClass = isActive
          ? 'text-green-600 border-b-2 border-green-600 pb-2'
          : 'text-gray-600 hover:text-gray-800';
        const countClass = isActive
          ? 'text-white bg-green-600 rounded-full px-2 ml-1'
          : 'text-gray-500';

        return (
          <button
            key={tab.label}
            className={`flex p-4 pb-6 tems-center text-l font-semibold transition-colors duration-200 ease-in-out ${activeClass}`}
            onClick={() => onChange(tab.label)}
          >
            <span>{tab.label}</span>
            <span className={`text-xs ml-2 pt-1 ${countClass}`}>{tab.count}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabMenu;