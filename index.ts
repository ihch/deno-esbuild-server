import { serve } from 'https://deno.land/std@0.74.0/http/server.ts';

declare global {
  interface ReadableStream<R> {
    getIterator(): any
  }
}

const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log('HTTP server running. Acces it at: http://localhost:8080/');

for await (const request of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: bodyContent });
}
