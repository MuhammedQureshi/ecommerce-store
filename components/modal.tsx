"use client";

import ColorPicker from '@/app/product/[id]/components/color-picker';
import Form from '@/app/product/[id]/components/form';
import Gallery from '@/app/product/[id]/components/gallery';
import Info from '@/app/product/[id]/components/info';
import { product } from '@/constants';
import { cn } from '@/libs/utils';
import { Dialog } from '@headlessui/react'
import { Star, X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children
}) => {
  return (
    <Dialog open={open} as="div" className="relative z-10" onClose={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
              {children}
            </div> 
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
};

export default Modal;
