import { Plus } from "lucide-react";

interface MobileToggleProps {
  onClick: () => void;
}

const MobileToggle: React.FC<MobileToggleProps> = ({
  onClick
}) => {
  return ( 
    <button
      type="button"
      className="inline-flex items-center lg:hidden"
      onClick={onClick}
    >
      <span className="text-sm font-medium text-gray-700">Filters</span>
      <Plus className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" />
    </button>
   );
}
 
export default MobileToggle;