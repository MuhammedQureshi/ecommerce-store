import { Disclosure } from "@headlessui/react";

import { ChevronDown } from "lucide-react";
import { cn } from "@/libs/utils";

interface MobileFilterItemTitleProps {
  open: boolean;
  section: Record<string, any>;
}

const MobileFilterItemTitle: React.FC<MobileFilterItemTitleProps> = ({
  open,
  section,
}) => {
  return (
    <div className="w-full px-2">
      <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
        <span className="text-sm font-medium text-gray-900">{section.name}</span>
        <span className="ml-6 flex h-7 items-center">
          <ChevronDown
            className={cn('h-5 w-5 transform', open ? '-rotate-180' : 'rotate-0')}
          />
        </span>
      </Disclosure.Button>
    </div>
  );
}

export default MobileFilterItemTitle;

