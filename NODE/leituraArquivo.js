const fs = require('fs'); // file system (fs) está dentro da pasta node_modules

const caminho  = __dirname + '/arquivo.json' // caminho do arquivo (__dirname é o diretório atual)

// leitura de arquivo de forma sincrona (não recomendado) fica em loop até ler todo o arquivo 
const conteudo = fs.readFileSync(caminho, 'utf-8') // leitura de arquivo de forma sincrona (utf-8 é o formato de codificação que to usando no vscode)
console.log(conteudo)

// leitura de forma assincrona (recomendado) 
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // o callback é o que vai executar quando a leitura for bem sucedida ou não
    const config = JSON.parse(conteudo) // o parse transforma o conteudo em um objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

fs.readdir(__dirname, (err, arquivos) => { // o readdir é para ler os arquivos dentro do diretório atual
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
