import { ScrollArea } from '~/components/ui/scroll-area';
import { ChatMessageUser } from './chat-message-user';

export function ChatMessages() {
  return (
    <ScrollArea className='mx-auto h-0 w-full max-w-3xl flex-1 px-4'>
      <ChatMessageUser />
    </ScrollArea>
  );
}
