import handler from "../dist/server/server.js";
import { Readable } from "node:stream";

export default async function (req, res) {
  try {
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers.host;
    const url = new URL(req.url, `${protocol}://${host}`);

    // Create a Fetch-compliant Request from Node.js req
    const request = new Request(url.href, {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" && req.method !== "HEAD" ? req : undefined,
      // @ts-ignore - duplex is needed for streaming bodies in some environments
      duplex: "half",
    });

    // Call the TanStack Start fetch handler
    const response = await handler.fetch(request);

    // Send status and headers back to Node.js res
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Stream the body
    if (response.body) {
      Readable.fromWeb(response.body).pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error("SSR Bridge Error:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
