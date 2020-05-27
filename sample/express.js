//https://expressjs.com/en/starter/hello-world.html
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
//routing
//https://expressjs.com/en/starter/basic-routing.html
app.get('/about', (req, res) => res.send('Hello About!'))
app.get('/contact', (req, res) => res.send('Hello Contact!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//now -- https://expressjs.com/en/starter/generator.html
//give ready structure