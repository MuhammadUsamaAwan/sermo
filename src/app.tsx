import { Sidebar } from './components/sidebar/sidebar';

export function App() {
  return (
    <div className='flex min-h-dvh bg-card'>
      <Sidebar />
      <main>Main</main>
    </div>
  );
}
