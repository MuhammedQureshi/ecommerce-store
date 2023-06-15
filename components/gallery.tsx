"use client";

import { Tab } from "@headlessui/react";

import GalleryTab from "@/components/gallery-tab";

interface GalleryProps {
  images: Record<string, any>[];
}

const Gallery: React.FC<GalleryProps> = ({
  images
}) => {
  return ( 
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        {/* Image Carousel using tabs */}
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      {/* Render main image based on selected tab */}
      <Tab.Panels className="aspect-square w-full">
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