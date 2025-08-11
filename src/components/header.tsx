import { ExportChat } from './export-chat';
import { ModelSelect } from './model-select';
import { NewChat } from './new-chat';
import { SidebarToggle } from './sidebar/sidebar-toggle';

export function Header() {
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center'>
        <SidebarToggle />
        <NewChat />
        <div className='px-2' />
        <ModelSelect />
      </div>
      <ExportChat />
    </div>
  );
}
