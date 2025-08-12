import { FileIcon, FileTextIcon, ImageIcon, MusicIcon, VideoIcon, XIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

interface FilePreviewProps {
  file: File;
  onRemove: () => void;
  className?: string;
}

function getFileIcon(type: string) {
  if (type.startsWith('image/')) return ImageIcon;
  if (type.startsWith('video/')) return VideoIcon;
  if (type.startsWith('audio/')) return MusicIcon;
  if (type.includes('text') || type.includes('json') || type.includes('javascript') || type.includes('typescript'))
    return FileTextIcon;
  return FileIcon;
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`;
}

export function FilePreview({ file, onRemove, className }: FilePreviewProps) {
  const Icon = getFileIcon(file.type);
  const isImage = file.type.startsWith('image/');

  return (
    <div
      className={cn(
        'group relative flex items-center gap-2 rounded-lg border bg-card p-2 transition-all hover:bg-accent',
        className
      )}
    >
      {isImage ? (
        <div className='relative h-10 w-10 overflow-hidden rounded border'>
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className='h-full w-full object-cover'
            onLoad={e => URL.revokeObjectURL((e.target as HTMLImageElement).src)}
          />
        </div>
      ) : (
        <div className='flex h-10 w-10 items-center justify-center rounded bg-muted'>
          <Icon className='h-5 w-5 text-muted-foreground' />
        </div>
      )}

      <div className='min-w-0 flex-1'>
        <p className='truncate font-medium text-foreground text-sm'>{file.name}</p>
        <p className='text-muted-foreground text-xs'>{formatFileSize(file.size)}</p>
      </div>

      <button
        onClick={onRemove}
        className='cursor-pointer rounded p-1 opacity-0 transition-opacity hover:bg-destructive/10 group-hover:opacity-100'
      >
        <XIcon className='h-4 w-4 text-destructive' />
      </button>
    </div>
  );
}
