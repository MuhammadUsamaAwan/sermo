import { EllipsisIcon, PencilLineIcon, Trash2Icon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

export function SidebarChat() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [chatName, setChatName] = useState('My Chat');
  const [tempName, setTempName] = useState(chatName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isRenaming && inputRef.current) {
      setTimeout(() => {
        inputRef.current!.focus();
        inputRef.current!.select();
      }, 0);
    }
  }, [isRenaming]);

  function startRename() {
    setTempName(chatName);
    setIsRenaming(true);
  }

  function finishRename() {
    const trimmed = tempName.trim();
    if (trimmed.length > 0) {
      setChatName(trimmed);
    }
    setIsRenaming(false);
  }

  function cancelRename() {
    setIsRenaming(false);
    setTempName(chatName);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      finishRename();
    }
    if (e.key === 'Escape') {
      cancelRename();
    }
  }

  return (
    <>
      <div className='group relative'>
        {!isRenaming && (
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
              <DropdownMenuItem onClick={startRename}>
                <PencilLineIcon className='size-4' /> Rename
              </DropdownMenuItem>
              <DropdownMenuItem className='text-destructive focus:text-destructive' onClick={() => setDeleteOpen(true)}>
                <Trash2Icon className='size-4 text-destructive' /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {isRenaming ? (
          <input
            ref={inputRef}
            value={tempName}
            onChange={e => setTempName(e.target.value)}
            onBlur={finishRename}
            onKeyDown={handleKeyDown}
            className='w-full rounded-md bg-accent px-2.5 py-1.5 outline-none'
          />
        ) : (
          <a href='/' className='block rounded-md px-2.5 py-1.5 group-hover:bg-accent'>
            <div className='max-w-46 truncate'>{chatName}</div>
          </a>
        )}
      </div>
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Chat?</AlertDialogTitle>
            <AlertDialogDescription>This will delete this chat.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button variant='destructive'>Delete</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
