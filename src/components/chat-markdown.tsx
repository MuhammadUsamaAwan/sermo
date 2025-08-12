import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

export default function ChatMarkdown({ content }: { content: string }) {
  const [copiedBlocks, setCopiedBlocks] = useState<Set<string>>(new Set());

  const copyToClipboard = async (text: string, blockId: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBlocks(prev => new Set([...prev, blockId]));
      setTimeout(() => {
        setCopiedBlocks(prev => {
          const newSet = new Set(prev);
          newSet.delete(blockId);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className='max-w-none'>
      <div className='space-y-1'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            // Headers
            h1: ({ children }) => <h1 className='mt-6 mb-4 font-bold text-2xl text-foreground'>{children}</h1>,
            h2: ({ children }) => <h2 className='mt-5 mb-3 font-bold text-foreground text-xl'>{children}</h2>,
            h3: ({ children }) => <h3 className='mt-4 mb-3 font-semibold text-foreground text-lg'>{children}</h3>,
            h4: ({ children }) => <h4 className='mt-3 mb-2 font-semibold text-base text-foreground'>{children}</h4>,
            h5: ({ children }) => <h5 className='mt-3 mb-2 font-semibold text-foreground text-sm'>{children}</h5>,
            h6: ({ children }) => <h6 className='mt-2 mb-2 font-semibold text-foreground text-sm'>{children}</h6>,

            // Paragraphs
            p: ({ children }) => <p className='mb-3 text-foreground leading-relaxed'>{children}</p>,

            // Code blocks
            code({ node, className, children, ...props }) {
              const inline = !className;
              const match = /language-(\w+)/.exec(className || '');
              const language = match ? match[1] : 'text';
              const codeString = String(children).replace(/\n$/, '');
              const blockId = `code-${codeString.length}-${language}-${codeString.slice(0, 20).replace(/[^a-zA-Z0-9]/g, '')}`;

              if (!inline && match) {
                return (
                  <div className='group relative my-4 rounded-lg border border-border bg-card'>
                    <div className='flex items-center justify-between rounded-t-lg border-border border-b bg-muted px-4 py-2'>
                      <span className='font-mono text-muted-foreground text-xs'>{language}</span>
                      <button
                        onClick={() => copyToClipboard(codeString, blockId)}
                        className='flex items-center gap-1 rounded px-2 py-1 text-muted-foreground text-xs transition-colors hover:bg-accent hover:text-accent-foreground'
                        type='button'
                        aria-label={`Copy ${language} code`}
                      >
                        {copiedBlocks.has(blockId) ? (
                          <>
                            <Check size={12} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <SyntaxHighlighter
                      style={oneDark}
                      language={language}
                      PreTag='div'
                      customStyle={{
                        margin: 0,
                        padding: '1rem',
                        background: 'transparent',
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                      }}
                      codeTagProps={{
                        style: {
                          fontFamily:
                            'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                        },
                      }}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                );
              }

              // Inline code
              return (
                <code
                  className='rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-foreground text-xs'
                  {...props}
                >
                  {children}
                </code>
              );
            },

            // Tables
            table: ({ children }) => (
              <div className='my-4 overflow-x-auto'>
                <table className='w-full border-separate border-spacing-0 overflow-hidden rounded-lg border border-border'>
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => <thead>{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children }) => <tr>{children}</tr>,
            th: ({ children }) => (
              <th className='border-border border-b bg-muted px-3 py-2 text-left font-semibold first:rounded-tl-lg last:rounded-tr-lg'>
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className='border-border px-3 py-2 [tr:last-child_&:first-child]:rounded-bl-lg [tr:last-child_&:last-child]:rounded-br-lg [tr:not(:last-child)_&]:border-b'>
                {children}
              </td>
            ),

            // Lists
            ul: ({ children }) => (
              <ul className='mb-4 ml-4 list-inside list-disc text-foreground leading-relaxed'>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className='mb-4 ml-4 list-inside list-decimal text-foreground leading-relaxed'>{children}</ol>
            ),
            li: ({ children }) => <li className='mb-1'>{children}</li>,

            // Blockquotes
            blockquote: ({ children }) => (
              <blockquote className='my-4 border-primary border-l-4 bg-muted py-2 pl-4 text-muted-foreground italic'>
                {children}
              </blockquote>
            ),

            // Horizontal rules
            hr: () => <hr className='my-8 border-border border-t' />,

            // Links
            a: ({ href, children }) => (
              <a
                href={href}
                className='text-primary underline hover:text-primary/80'
                target='_blank'
                rel='noopener noreferrer'
              >
                {children}
              </a>
            ),

            // Strong/Bold
            strong: ({ children }) => <strong className='font-semibold'>{children}</strong>,

            // Emphasis/Italic
            em: ({ children }) => <em className='italic'>{children}</em>,

            // Strikethrough
            del: ({ children }) => <del className='line-through opacity-75'>{children}</del>,

            // Details/Summary (raw HTML support via rehype-raw)
            details: ({ children }) => (
              <details className='my-4 rounded-lg border border-border bg-card'>{children}</details>
            ),
            summary: ({ children }) => (
              <summary className='cursor-pointer rounded-lg bg-muted px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground [details[open]_&]:rounded-t-lg [details[open]_&]:rounded-b-none'>
                {children}
              </summary>
            ),

            // Keyboard hints
            kbd: ({ children }) => (
              <kbd className='mx-0.5 inline-flex items-center rounded border border-border bg-muted px-1.5 py-1 font-mono text-xs shadow-sm'>
                {children}
              </kbd>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export { ChatMarkdown };
