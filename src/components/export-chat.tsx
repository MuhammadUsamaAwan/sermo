import { DownloadIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';

export function ExportChat() {
  return (
    <Button variant='ghost' size='icon'>
      <DownloadIcon />
    </Button>
  );
}
