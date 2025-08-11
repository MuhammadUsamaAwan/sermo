import { EllipsisIcon, PencilLineIcon, Trash2Icon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

export function SidebarChat() {
  return (
    <div className='group relative'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className='opacity-0 outline-0 group-hover:opacity-100 data-[state=open]:opacity-100'
          asChild
        >
          <button className='-translate-y-1/2 absolute top-1/2 right-0.5 cursor-pointer px-2'>
            <EllipsisIcon className='size-4 text-muted-foreground' />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          <DropdownMenuItem>
            <PencilLineIcon className='size-4' /> Rename
          </DropdownMenuItem>
          <DropdownMenuItem className='text-destructive focus:text-destructive'>
            <Trash2Icon className='size-4 text-destructive' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
        <a href='/' className='block rounded-md px-2.5 py-1.5 group-hover:bg-accent'>
          React component help
        </a>
      </DropdownMenu>
    </div>
  );
}
