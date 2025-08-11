import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SidebarState = {
  open: boolean;
  toggle: () => void;
};

export const useSidebarState = create<SidebarState>()(
  persist(
    set => ({
      open: true,
      toggle: () => set(state => ({ open: !state.open })),
    }),
    {
      name: 'sidebar-storage',
    }
  )
);
