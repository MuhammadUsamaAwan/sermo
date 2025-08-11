import { PanelRightIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';

export function SidebarToggle() {
  return (
    <Button variant='ghost' size='icon'>
      <PanelRightIcon className='rotate-180' />
    </Button>
  );
}
