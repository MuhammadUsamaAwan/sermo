import { SquarePenIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

export function SidebarHeader({ className }: { className?: string }) {
  return (
    <a href='/' className={cn('flex items-center gap-1.5 rounded-md px-2.5 py-1.5 hover:bg-accent', className)}>
      <SquarePenIcon className='size-4' />
      New Chat
    </a>
  );
}
