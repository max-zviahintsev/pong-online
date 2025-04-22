/* eslint-disable no-console */
import cors from '@fastify/cors'
import app from './app.ts'

await app.register(cors, {
  origin: (origin, cb) => {
    if (!origin) return cb(null, true)

    const allowedOrigins = ['http://localhost:5173']

    if (allowedOrigins.includes(origin)) {
      cb(null, true)
    } else {
      cb(new Error('Not allowed by CORS'), false)
    }
  },
  credentials: true,
})

const PORT = Number(process.env.PORT) || 8080
const HOST = '0.0.0.0'

app.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
