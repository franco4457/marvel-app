import { middleware } from './middleware'
import { createServer, IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url || '', true)
    middleware(req).handleRequest(req, res)
    handler(req, res, parsedUrl)
  }).listen(3000, (err: Error) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})