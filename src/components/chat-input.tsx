import { ArrowUpIcon, PlusIcon } from 'lucide-react';

export function ChatInput() {
  return (
    <div className='relative mx-auto w-min'>
      <textarea
        className='w-xs resize-none rounded-full bg-accent py-3.5 pr-8 pl-13 outline-none placeholder:text-muted-foreground md:w-lg lg:w-2xl'
        placeholder='Ask anything'
        rows={1}
      />
      <button className='absolute top-2 left-3 cursor-pointer rounded-full p-2'>
        <PlusIcon className='size-5 text-foreground' />
      </button>
      <button className='absolute top-2 right-2 cursor-pointer rounded-full bg-foreground p-2'>
        <ArrowUpIcon className='size-5 text-background' />
      </button>
    </div>
  );
}
