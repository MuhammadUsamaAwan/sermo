import { PanelRightIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { useSidebarState } from '~/lib/store';

export function SidebarToggle() {
  const toggle = useSidebarState(state => state.toggle);

  return (
    <Button variant='ghost' size='icon' onClick={toggle}>
      <PanelRightIcon className='rotate-180' />
    </Button>
  );
}
