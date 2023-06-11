import { X } from "lucide-react";

interface MobileCloseProps {
  onClick: () => void;
}

const MobileClose: React.FC<MobileCloseProps> = ({
  onClick,
}) => {
  return ( 
    <button
      type="button"
      className="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
      onClick={onClick}
    >
      <span className="sr-only">Close menu</span>
      <X className="h-6 w-6" />
    </button>
  );
}
 
export default MobileClose;
