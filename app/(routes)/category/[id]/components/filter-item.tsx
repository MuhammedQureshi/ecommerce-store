interface FilterItemProps {
  option: Record<string, any>;
  section: Record<string, any>;
}

const FilterItem: React.FC<FilterItemProps> = ({ 
  option, 
  section
}) => {
  return ( 
    <div key={option.value} className="flex items-center">
      <input
        id={`${section.id}-${option.value}`}
        name={`${section.id}[]`}
        defaultValue={option.value}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor={`${section.id}-${option.value}`} className="ml-3 font-medium text-sm text-black">
        {option.label}
      </label>
    </div>
  );
}
 
export default FilterItem;