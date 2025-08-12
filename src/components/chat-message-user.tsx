import { CheckIcon, CopyIcon, PencilLineIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/components/ui/button';

export function ChatMessageUser() {
  const message = 'Need help in a react component';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className='group flex flex-col justify-end gap-0.5'>
      <span className='flex justify-end'>
        <span className='max-w-lg rounded-lg bg-accent px-4 py-2 text-right text-sm'>{message}</span>
      </span>
      <div className='flex justify-end opacity-0 duration-200 group-hover:opacity-100'>
        <Button variant='ghost' size='xs' onClick={handleCopy}>
          {copied ? <CheckIcon className='size-4' /> : <CopyIcon className='size-4' />}
        </Button>
        <Button variant='ghost' size='xs'>
          <PencilLineIcon className='size-4' />
        </Button>
      </div>
    </div>
  );
}
