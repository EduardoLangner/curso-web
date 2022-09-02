const bodParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

app.use(express.static('.')) // serve static files pega todos os arquivos estáticos da pasta atual e os disponibiliza para o cliente
app.use(bodParser.urlencoded({ extended: true }))
app.use(bodParser.json())

app.get('/teste', (req, res) => res.send('OK'))
app.listen(8081, () => console.log('Executando...'))
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '.')
    }, 
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })

})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

const upload = multer({ storage }).single('arquivo')