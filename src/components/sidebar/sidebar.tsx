import { SidebarChats } from './sidebar-chats';
import { SidebarHeader } from './sidebar-header';
import { SidebarSearch } from './sidebar-search';
import { SidebarSettings } from './sidebar-settings';

export function Sidebar() {
  return (
    <div className='flex h-dvh w-64 flex-col bg-background px-2 py-2 text-sm'>
      <SidebarHeader className='mb-2' />
      <SidebarSearch className='mb-2' />
      <SidebarChats />
      <SidebarSettings />
    </div>
  );
}
