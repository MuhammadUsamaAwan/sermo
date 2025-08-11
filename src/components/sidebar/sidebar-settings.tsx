import { SettingsIcon } from 'lucide-react';

export function SidebarSettings() {
  return (
    <button className='mt-2 flex w-full cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 hover:bg-accent'>
      <SettingsIcon className='size-4' />
      Settings
    </button>
  );
}
