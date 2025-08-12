import { CheckIcon, CopyIcon, PencilLineIcon, Trash2Icon } from 'lucide-react';
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

export function ChatMessageUser() {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [message, setMessage] = useState('Need help in a react component');
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [draftMessage, setDraftMessage] = useState(message);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.selectionStart = textareaRef.current.value.length;
    }
  }, [isEditing]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const handleEdit = () => {
    setDraftMessage(message);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    setMessage(draftMessage.trim());
    setIsEditing(false);
  };

  return (
    <div className='group space-y-0.5'>
      <span className='flex justify-end'>
        {isEditing ? (
          <textarea
            ref={textareaRef}
            value={draftMessage}
            onChange={e => setDraftMessage(e.target.value)}
            className='w-full resize-none rounded-lg bg-accent px-4 py-2 text-sm outline-none'
            rows={4}
          />
        ) : (
          <span className='max-w-lg rounded-lg bg-accent px-4 py-2 text-right text-sm'>{message}</span>
        )}
      </span>
      {isEditing ? (
        <div className='flex justify-end gap-2'>
          <Button variant='outline' size='sm' onClick={handleCancelEdit}>
            Cancel
          </Button>
          <Button size='sm' onClick={handleSaveEdit}>
            Send
          </Button>
        </div>
      ) : (
        <div className='flex justify-end gap-1 opacity-0 duration-200 group-hover:opacity-100'>
          <Button variant='ghost' size='xs' onClick={handleCopy}>
            {copied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
          </Button>
          <Button variant='ghost' size='xs' onClick={handleEdit}>
            <PencilLineIcon className='size-4' />
          </Button>
          <Button variant='ghost' size='xs' onClick={() => setDeleteOpen(true)}>
            <Trash2Icon className='size-4 text-destructive' />
          </Button>
        </div>
      )}
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
