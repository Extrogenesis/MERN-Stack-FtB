const express = require('express')

const app = express()


app.get('/', (req, res) => res.send("API BLOB"))

const PORT = process.env.PORT || 5000 //heroku uses process.env.PORT 


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))