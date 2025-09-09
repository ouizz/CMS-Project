type FilterBarProps  = {
  onSearch: (keyword: string) => void;
};

const FilterBar = ({ onSearch }: FilterBarProps ) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="relative basis-[20%]">
            <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 icon-search"
                placeholder=": Search by keyword or Number or Mat-code"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
        <div className="relative basis-[10%]">
            <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 icon-advance-search"
                placeholder="Advance filter"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
      </div>
    </>
  );
};

export default FilterBar;