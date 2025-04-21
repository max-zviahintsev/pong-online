/* eslint-disable no-console */
import app from './app.ts'

const PORT = Number(process.env.PORT) || 8080
const HOST = '0.0.0.0'

app.listen({ port: PORT, host: HOST }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
