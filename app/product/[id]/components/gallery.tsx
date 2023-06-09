"use client";

import { Tab } from "@headlessui/react";

import { cn } from "@/libs/utils";

interface GalleryProps {
  images: Record<string, any>[];
}

const Gallery: React.FC<GalleryProps> = ({
  images
}) => {
  return ( 
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        {/* Image Carousel */}
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={image.id}
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
          ))}
        </Tab.List>
      </div>

      {/* Main Image */}
      <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
 
export default Gallery;