import { create } from 'zustand';

type ModalStore = {
    textModal: string;
    nameProject: string;
    image: any;
    isOpen: boolean;
    open: () => void;
    close: () => void;
    editText: (newText: string) => void;
    editName: (newName: string) => void;
    editImage: (newImage: any) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    textModal: "322123",
    nameProject: "asdasd",
    image: "1",
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    editText: (newText) => set({ textModal: newText }),
    editName: (newName) => set({ nameProject: newName }),
    editImage: (newImage) => set({ image: newImage }),
}));

