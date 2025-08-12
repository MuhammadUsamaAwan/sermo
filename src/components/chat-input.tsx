export function ChatInput() {
  return (
    <textarea
      className='-translate-x-1/2 absolute bottom-6 left-1/2 w-xs resize-none rounded-full bg-accent px-8 py-3.5 outline-none placeholder:text-muted-foreground md:w-lg lg:w-2xl'
      placeholder='Ask anything'
      rows={1}
    />
  );
}
