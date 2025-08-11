import { ExportChat } from './components/export-chat';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar/sidebar';
import { SidebarToggle } from './components/sidebar/sidebar-toggle';

export function App() {
  return (
    <div className='flex min-h-dvh bg-card'>
      <Sidebar />
      <main className='flex-1 p-2'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-4'>
            <SidebarToggle />
            <Header />
          </div>
          <ExportChat />
        </div>
      </main>
    </div>
  );
}
