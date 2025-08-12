import { CheckIcon, CopyIcon, RefreshCcwIcon, Trash2Icon, Volume2Icon } from 'lucide-react';
import { useState } from 'react';
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
import { markdown } from '~/data/markdown';
import { ChatMarkdown } from './chat-markdown';

export function ChatMessageAI() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className='group space-y-0.5'>
      <ChatMarkdown content={markdown} />
      <div className='flex gap-1 opacity-0 duration-200 group-hover:opacity-100'>
        <Button variant='ghost' size='xs' onClick={handleCopy}>
          {copied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
        </Button>
        <Button variant='ghost' size='xs'>
          <Volume2Icon className='size-4' />
        </Button>
        <Button variant='ghost' size='xs'>
          <RefreshCcwIcon className='size-4' />
        </Button>
        <Button variant='ghost' size='xs' onClick={() => setDeleteOpen(true)}>
          <Trash2Icon className='size-4 text-destructive' />
        </Button>
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
    </div>
  );
}
