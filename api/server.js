export const config = {
  runtime: "edge",
};

import handler from "../dist/server/server.js";

export default async function (req) {
  return handler.fetch(req);
}
