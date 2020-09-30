import * as express from 'express'
import { registerUtterances } from "./Routes"

const app = express()
const port = 3000

registerUtterances(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

