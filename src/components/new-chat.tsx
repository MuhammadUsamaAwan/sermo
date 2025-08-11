import { SquarePenIcon } from 'lucide-react';
import { buttonVariants } from '~/components/ui/button';

export function NewChat() {
  return (
    <a href='/' className={buttonVariants({ variant: 'ghost', size: 'icon' })}>
      <SquarePenIcon />
    </a>
  );
}
