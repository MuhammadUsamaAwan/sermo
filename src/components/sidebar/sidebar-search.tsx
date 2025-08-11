import { SearchIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

export function SidebarSearch({ className }: { className?: string }) {
  return (
    <div className={cn('relative', className)}>
      <input
        className='w-full rounded-md bg-accent py-1.5 pr-1.5 pl-8 outline-none placeholder:text-muted-foreground placeholder:text-sm'
        placeholder='Search chats...'
      />
      <SearchIcon className='-translate-y-1/2 pointer-events-none absolute top-1/2 left-2.5 size-4 text-muted-foreground' />
    </div>
  );
}
