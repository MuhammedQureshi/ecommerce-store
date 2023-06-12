"use client";

import usePreviewModal from "@/hooks/usePreviewModal";

import { product } from "@/constants";
import Gallery from "@/app/product/[id]/components/gallery";
import Info from "@/app/product/[id]/components/info";
import Form from "@/app/product/[id]/components/form";

import Modal from "./modal";

const PreviewModal = () => {
  const previewModal = usePreviewModal();

  return ( 
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info name={product.name} price={product.price} />
          <hr className="my-4" />
          <Form product={product} />
        </div>
      </div>
    </Modal>
  );
}
 
export default PreviewModal;
