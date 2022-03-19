export * from 'https://deno.land/std@0.74.0/http/server.ts';

declare global {
  interface ReadableStream {
    getIterator(): any
  }
}
