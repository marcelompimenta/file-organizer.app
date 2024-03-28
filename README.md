
# Organizador de arquivos

Projeto criado com a finalidade de automatizar a organização de arquivos por tipo diminuindo o tempo, para selecionar arquivos do mesmo tipo ou categoria, passível de melhorias. Fique a vontade para criar um fork e fazer suas modificações.

## Tecnologias

Script de **complexidade baixa** criado e baseado em JS usando o motor V8 do Chrome com NodeJs.
> ![Logo Nodejs](https://img.shields.io/node/v/npm.svg?logo=nodedotjs)
> ![Logo Javascript](https://img.shields.io/badge/javascript-grey?logo=javascript&logoColor=yellow)


## Como rodar o script?

> [!IMPORTANT]
> use `yarn` ou `npm`  para instalar as dependências do projeto, após a instalação das dependências siga os próximos passos.
```sh
 > yarn 
 ```
ou

```sh
> npm install
```


## Configurações importantes

> [!WARNING]
> Antes de rodar o script escolha o local onde será criada a pasta que guardara as subpastas criadas de acordo com o tipo do arquivo, esse local pode seria ser: `Desktop`

```javascript 
const rootDir = 'Desktop' // caminho principal onde será criada a nova pasta
```

> [!IMPORTANT]
> Depois escolha de onde os arquivos serão captados para serem tratados exemplo: `Documents` no caso de uso para `Windows` , para outros sistemas operacionais tente procurar na documentação.
```javascript
 const directory = 'Documents' // local atual dos arquivos
 ```

> [!IMPORTANT]
> Por último mais não menos importante, troque o nome da pasta que será criada no diretório central que já foi especificado acima.
```javascript
const newDirectory = 'Files of Documents' // nome da pasta a ser criada
 ```

<!--#### Table of Contents

- [Underline](#underline)
- [Indent](#indent)
- [Center](#center)
- [Color](#color)-->
