import { create } from 'zustand';

interface PreviewModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
