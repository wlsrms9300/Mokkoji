import { create } from 'zustand'

interface ModalState {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    openModal: (isOpen: boolean, onClose: () => void, children: React.ReactNode) => void
    reset: () => void
}

export const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    children: null,
    openModal: (isOpen, onClose, children) => set({ isOpen, onClose, children }),
    reset: () => set({ isOpen: false, children: null, onClose: () => {} }),
}))
