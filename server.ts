// import { middleware } from './middleware'
// import { createServer } from 'http'
// import { parse } from 'url'
// import next, { NextApiRequest, NextApiResponse } from 'next'

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handler = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req: NextApiRequest, res: NextApiResponse) => {
//     const parsedUrl = parse(req.url || '', true)
//     middleware(req).handleRequest(req, res)
//     handler(req, res, parsedUrl)
//   }).listen(3000, (err: Error): Void => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })
