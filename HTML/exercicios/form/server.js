const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3003

app.use(bodyParser.urlencoded ({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log('Dados recebidos: ' + JSON.stringify(req.body))
    console.log(req.body)
    res.send('<h1>Usuário cadastrado com sucesso!</h1>')
})

app.listen(port)
console.log(`Server running on port ${port}`)