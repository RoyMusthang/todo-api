import api from './api'
import vars from './vars'

import mongoose from './db'

mongoose.authenticate()
  .then(() => {
    api.listen(vars.api.port, () => {
      console.log(`running on port ${vars.api.port}`)
    })
  })
  .catch((error: Error) => {
    console.error(error)
    process.exit(1)
  })