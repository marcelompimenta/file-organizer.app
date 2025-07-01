# AGENTS Instructions

As orientações a seguir aplicam-se a todo o projeto. Para solicitações de desenvolvimento de qualquer endpoint de api, utilize a estrutura src/api/controllers, src/api/services e src/api/models, para metodos ou funções sempre usar o paradigma funcional usando sempre a estrutura abaixo como exemplo:  

```JS
  function createUser(userData: CreateUserInterface): Promise{
    return userServices.createUser(userData)
  }
```

Para cada novo metodo ou função crie uma interface de tipo em **types/[controlers | services | models]/[nome_do_arquivo].ts** exporte cada nova **interface** e adicione ao seu metodo ou função, se não for necessário uma interface, adicione a tipagem ao metodo ou função, tente manter um padrão limpo e organizado, sempre mantendo as interfaces para grande quantidade de dados ou dados que são necessários.

## Fluxo de Desenvolvimento

1. Instale as dependências JavaScript:

``` bash
    yarn
```
  
1. Formate o código JavaScript com Prettier ou ESLINT:

2. Se não exitir a lib, instale e faça as configurações necessárias, teste e verifique se estão funcionando corretamente:

```bash
   yarn add --dev prettier
   yarn add --dev eslint
```
  
1. Sempre que modificar arquivos em src/, compile os assets:

```bash
  npm run build
```
  
1. Crie branches com nomes em ingles e sem caracteres especiais

## Execução de Testes

Execute os testes via Jest caso não exista ou tiver algum erro intale a lib:

```bash
  yarn add --dev jest
```

Configure o json:

```json
  {
    "scripts": {
      "test": "jest"
    }
  }
```

Execute os testes:

```bash
   yarn test
```
  
Sempre tente rodar os testes antes de enviar o PR. Caso algum comando falhe por limitações do ambiente, descreva isso na seção **Testing** do PR usando a mensagem abaixo:
Codex couldn't run certain commands due to environnment limitations. Consider configuring a setup script or internet access in your Codex environment to install dependencies.

## Mensagens de Pull Request

Inclua um **Summary** resumindo as principais alterações.
Em **Testing** indique como executou os testes.
