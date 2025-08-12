import { ScrollArea } from '~/components/ui/scroll-area';
import { ChatMessage } from './chat-message';

export function ChatMessages() {
  return (
    <ScrollArea className='mx-auto h-0 max-w-3xl flex-1 px-4'>
      <ChatMessage />
    </ScrollArea>
  );
}
