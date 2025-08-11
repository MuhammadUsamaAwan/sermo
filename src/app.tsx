import { Header } from './components/header';
import { Sidebar } from './components/sidebar/sidebar';
import { useSidebarState } from './lib/store';
import { cn } from './lib/utils';

export function App() {
  const open = useSidebarState(state => state.open);

  return (
    <div className='min-h-dvh bg-card'>
      <Sidebar />
      <main className={cn('p-2 duration-200', open && 'ml-64')}>
        <Header />
      </main>
    </div>
  );
}
