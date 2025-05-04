import next from "next";
import http from "http";
import { AddressInfo } from "net";

let server: http.Server;
let app: ReturnType<typeof next>;

export const startTestServer = async () => {
  app = next({ dev: false, dir: "./" });
  const handle = app.getRequestHandler();
  await app.prepare();

  server = http.createServer((req, res) => {
    handle(req, res);
  });

  await new Promise<void>((resolve) => {
    server.listen(0, resolve); // use dynamic port
  });

  const address = server.address() as AddressInfo;
  const port = address.port;
  return `http://localhost:${port}`;
};

export const stopTestServer = async () => {
  await new Promise((resolve) => server.close(resolve));
};
