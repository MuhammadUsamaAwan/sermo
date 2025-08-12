import { Sheet, SheetContent } from '~/components/ui/sheet';
import { useIsMobile } from '~/hooks/use-mobile';
import { useSidebarState } from '~/lib/store';
import { cn } from '~/lib/utils';
import { SidebarChats } from './sidebar-chats';
import { SidebarHeader } from './sidebar-header';
import { SidebarSearch } from './sidebar-search';
import { SidebarSettings } from './sidebar-settings';

export function Sidebar() {
  const open = useSidebarState(state => state.open);
  const toggle = useSidebarState(state => state.toggle);
  const isMobile = useIsMobile();

  const content = (
    <div
      className={cn(
        'flex h-dvh w-64 flex-col bg-background px-2 py-2 text-sm',
        !open && !isMobile && '-translate-x-64',
        !isMobile && 'fixed duration-300'
      )}
    >
      <SidebarHeader className='mb-2' />
      <SidebarSearch className='mb-2' />
      <SidebarChats />
      <SidebarSettings />
    </div>
  );

  return isMobile ? (
    <Sheet open={open} onOpenChange={toggle}>
      <SheetContent className='w-64'>{content}</SheetContent>
    </Sheet>
  ) : (
    content
  );
}
