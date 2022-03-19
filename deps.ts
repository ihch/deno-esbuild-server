export * from 'https://deno.land/std@0.74.0/http/server.ts';
// @deno-types='https://deno.land/x/esbuild@v0.11.23/mod.d.ts'
export * as esbuild from 'https://deno.land/x/esbuild@v0.11.23/mod.js';
export * as esbuildPluginSvg from 'https://esm.sh/esbuild-plugin-svg';

declare global {
  interface ReadableStream {
    getIterator(): any
  }
}
