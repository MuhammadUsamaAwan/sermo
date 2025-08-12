import { ChatInput } from './components/chat-input';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar/sidebar';
import { useIsMobile } from './hooks/use-mobile';
import { useSidebarState } from './lib/store';
import { cn } from './lib/utils';

export function App() {
  const open = useSidebarState(state => state.open);
  const isMobile = useIsMobile();

  return (
    <div className='bg-card'>
      <Sidebar />
      <main className={cn('relative h-dvh p-2 duration-200', open && !isMobile && 'ml-64')}>
        <Header />
        <ChatInput />
      </main>
    </div>
  );
}
