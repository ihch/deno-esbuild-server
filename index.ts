import { serve } from "./deps.ts";
import { esbuild } from "./deps.ts";

const result = await esbuild.build({
  entryPoints: ["./hoge.ts"],
  bundle: true,
  outdir: "./build",
});
console.log("result", result);

const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log("HTTP server running. Acces it at: http://localhost:8080/");

const text = await Deno.readTextFile("./public/index.html");
console.log(text.toString());

for await (const request of server) {
  let bodyContent = "Your user-agent is:\n\n";
  bodyContent += request.headers.get("user-agent") || "Unknown";

  request.respond({ status: 200, body: text });
}
