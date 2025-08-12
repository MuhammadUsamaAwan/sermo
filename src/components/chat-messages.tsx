import { ScrollArea } from '~/components/ui/scroll-area';
import { ChatMessageAI } from './chat-message-ai';
import { ChatMessageUser } from './chat-message-user';

export function ChatMessages() {
  return (
    <ScrollArea className='h-0 flex-1'>
      <div className='mx-auto w-full max-w-3xl space-y-2 px-4'>
        <ChatMessageUser />
        <ChatMessageAI />
      </div>
    </ScrollArea>
  );
}
