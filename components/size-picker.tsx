import { RadioGroup } from "@headlessui/react";

import { cn } from "@/libs/utils";

interface SizePickerProps {
  sizes: Record<string, any>[];
  selectedSize: Record<string, any>;
  onChange: (color: Record<string, any>) => void;
}

const SizePicker: React.FC<SizePickerProps> = ({ 
  sizes,
  selectedSize,
  onChange
}) => {
  return ( 
    <div className="flex items-center gap-x-4">
      <h3 className="font-semibold text-black">Select Size:</h3>

      <RadioGroup value={selectedSize} onChange={onChange}>
        <span className="flex items-center space-x-3">
          {sizes.map((size) => (
            <RadioGroup.Option
              key={size.name}
              value={size}
              className={({ checked }) =>
                cn(
                  'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-black',
                  checked ? 'ring-2 ring-offset-1' : '',
                )
              }
            >
              <span
                className="h-6 w-6 rounded-full border border-black border-opacity-10 p-4 text-xs flex items-center justify-center"
              >
                {size.name}
              </span>
            </RadioGroup.Option>
          ))}
        </span>
      </RadioGroup>
    </div>
   );
}
 
export default SizePicker;