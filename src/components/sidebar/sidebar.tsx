import { useSidebarState } from '~/lib/store';
import { cn } from '~/lib/utils';
import { SidebarChats } from './sidebar-chats';
import { SidebarHeader } from './sidebar-header';
import { SidebarSearch } from './sidebar-search';
import { SidebarSettings } from './sidebar-settings';

export function Sidebar() {
  const open = useSidebarState(state => state.open);

  return (
    <div
      className={cn(
        'fixed flex h-dvh w-64 flex-col bg-background px-2 py-2 text-sm duration-300',
        !open && '-translate-x-64'
      )}
    >
      <SidebarHeader className='mb-2' />
      <SidebarSearch className='mb-2' />
      <SidebarChats />
      <SidebarSettings />
    </div>
  );
}
