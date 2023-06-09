import { RadioGroup } from "@headlessui/react";

import { cn } from "@/libs/utils";

interface ColorPickerProps {
  colors: Record<string, any>[];
  selectedColor: Record<string, any>;
  onChange: (color: Record<string, any>) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ 
  colors,
  selectedColor,
  onChange
}) => {
  return ( 
    <div className="flex items-center gap-x-4">
      <h3 className="font-semibold text-black">Select Color:</h3>

      <RadioGroup value={selectedColor} onChange={onChange}>
        <span className="flex items-center space-x-3">
          {colors.map((color) => (
            <RadioGroup.Option
              key={color.name}
              value={color}
              className={({ checked }) =>
                cn(
                  'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-black',
                  color.selectedColor,
                  checked ? 'ring-2 ring-offset-1' : '',
                )
              }
            >
              <span
                className={cn(
                  'h-6 w-6 rounded-full border p-4 border-black border-opacity-10',
                  color.bgColor,
                )}
              />
            </RadioGroup.Option>
          ))}
        </span>
      </RadioGroup>
    </div>
   );
}
 
export default ColorPicker;