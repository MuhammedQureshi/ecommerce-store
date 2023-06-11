interface MobileFilterItemInputProps {
  option: Record<string, any>;
  section: Record<string, any>;
}

const MobileFilterItemInput: React.FC<MobileFilterItemInputProps> = ({
  option,
  section
}) => {
  return ( 
    <div key={option.value} className="flex items-center">
      <input
        id={`${section.id}-${option.value}-mobile`}
        name={`${section.id}[]`}
        defaultValue={option.value}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label
        htmlFor={`${section.id}-${option.value}-mobile`}
        className="ml-3 text-sm text-gray-500"
      >
        {option.label}
      </label>
    </div>
  );
};

export default MobileFilterItemInput;

