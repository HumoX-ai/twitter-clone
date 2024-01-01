import { create } from "zustand";

interface RegisterStoreState {
  isOpen?: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRegisterModal = create<RegisterStoreState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
