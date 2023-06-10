import { Tab } from "@headlessui/react";

import { cn } from "@/libs/utils";

interface GalleryTabProps {
  image: Record<string, any>;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return ( 
    <Tab
      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white"
    >
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <img src={image.src} alt="" className="h-full w-full object-cover object-center" />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  );
}
 
export default GalleryTab;
