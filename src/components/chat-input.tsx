import { ArrowUpIcon, PlusIcon, XIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { Badge } from '~/components/ui/badge';
import { cn } from '~/lib/utils';

export function ChatInput() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');
  const [isTall, setIsTall] = useState(false);
  const [files, setFiles] = useState<{ id: string; file: File }[]>([]);

  return (
    <div className='relative mx-auto w-min'>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={e => {
          const textarea = textareaRef.current;
          if (!textarea) return;
          textarea.style.height = 'auto';
          const newHeight = Math.min(textarea.scrollHeight, 200);
          textarea.style.height = `${newHeight}px`;
          setIsTall(newHeight > 52);
          setValue(e.target.value);
        }}
        className={cn(
          'no-scrollbar w-xs resize-none bg-accent px-13 py-3.5 outline-none placeholder:text-muted-foreground md:w-lg lg:w-2xl',
          isTall ? 'rounded-lg' : 'rounded-full'
        )}
        placeholder='Ask anything'
        rows={1}
      />
      <input
        type='file'
        id='file'
        className='hidden'
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) setFiles(files => [...files, { id: crypto.randomUUID(), file }]);
        }}
      />
      <label htmlFor='file' className='absolute top-2 left-3 cursor-pointer rounded-full p-2'>
        <PlusIcon className='size-5 text-foreground' />
      </label>
      <button className='absolute top-2 right-2 cursor-pointer rounded-full bg-foreground p-2'>
        <ArrowUpIcon className='size-5 text-background' />
      </button>
      <div className='mx-auto flex flex-wrap gap-2'>
        {files.map(f => (
          <Badge variant='outline' key={f.id}>
            {f.file.name}{' '}
            <button
              className='cursor-pointer'
              onClick={() => setFiles(files => files.filter(files => files.id !== f.id))}
            >
              <XIcon className='size-3' />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
}
