import { ArrowUpIcon, PlusIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { FilePreview } from '~/components/file-preview';
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
      {files.length > 0 && (
        <div className='mx-auto flex max-w-2xl flex-wrap gap-2'>
          {files.map(f => (
            <FilePreview
              key={f.id}
              file={f.file}
              onRemove={() => setFiles(files => files.filter(files => files.id !== f.id))}
              className='min-w-0 max-w-xs'
            />
          ))}
        </div>
      )}
    </div>
  );
}
