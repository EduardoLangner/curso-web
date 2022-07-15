//criei esse arquivo package.json dentro de funcionario para que o node possa ler o arquivo e entender que ele é um pacote
// npm init -y (comando para criar o package.json)
/*{
    "name": "funcionario",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
  }
*/
// urilizei o comando npm i --save axios para instalar o axios (biblioteca para fazer requisições http) e foi criado o package-lock.json

/* package.json
{
    "name": "funcionario",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "axios": "^0.25.0"
    }
  }

    package-lock.json
    {
  "name": "funcionario",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "axios": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/axios/-/axios-0.25.0.tgz",
      "integrity": "sha512-cD8FOb0tRH3uuEe6+evtAbgJtfxr7ly3fQjYcMcuPlgkwVS9xboaVIpcDV+cYQe+yGykgwZCs1pzjntcGa6l5g==",
      "dev": true,
      "requires": {
        "follow-redirects": "^1.14.7"
      }
    },
    "follow-redirects": {
      "version": "1.14.7",
      "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.14.7.tgz",
      "integrity": "sha512-+hbxoLbFMbRKDwohX8GkTataGqO6Jb7jGwpAlwgy2bIz25XtRm7KEzJM76R1WiNT5SwZkX4Y75SwBolkpmE7iQ==",
      "dev": true
    }
  }
}

*/
// utilizei o comando npm i --save-dev axios (para instalar o axios e utilizar somente quando estiver em desenvolvimentonpm)
/*
{
    "name": "funcionario",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {},
    "devDependencies": {
      "axios": "^0.25.0"
    }
  }
*/
// save-dev é mais utilizado pr testes (acabei excluindo)