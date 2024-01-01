import { create } from "zustand";

interface LoginStoreState {
  isOpen?: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLoginModal = create<LoginStoreState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
