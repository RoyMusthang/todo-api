# Todo List

## Documentação

A documentação de operação da API foi feita utilizando [Swagger](https://swagger.io), e pode ser consultada de forma interativa através da primeira rota da api: `http://localhost:3001/`, enquanto os demais endpoint são contidos no : `http://localhost:3001/todos/`

Além de explicar e exemplificar a utilização da API, as páginas ainda permitem testar os endpoints diretamente pela interface gráfica da documentação.

## Rodando Aplicação

A execução da aplicação com `Docker versão 20.10.21` ou `Node`.

Obs: você precisa ter o docker, npm/yarn e git na sua máquina para conseguir proseguir
<details>
  <summary><b>Docker</b></summary><br>



1. Clone o projeto

```bash
  git clone git@github.com:RoyMusthang/mamboo-todo.git
```

2. Entre no diretório do projeto

```bash
  cd mamboo-todo
```

3. Suba a orquestração de containers

```bash
  npm run compose:up
```

4. A aplicação poderá ser acessada através de

```bash
  http://localhost:3001/todos
```

5. Para encerrar a aplicação basta executar o comando

```bash
  npm run compose:down
```

</details>

Obs: para rodar a aplicação dessa forma você precisar ter node, git, npm/yarn e mongodb na sua maquina
<details>
  <summary><b>Node</b></summary><br>


1. Clone o projeto

```bash
    git clone git@github.com:RoyMusthang/mamboo-todo.git
```

2. Entre no diretório do projeto

```bash
  cd mamboo-todo
```

3. Instale as dependências

```bash
  npm install
```

4. Rode a aplicação

```bash
  npm start
```

5. A aplicação poderá ser acessada através de

```bash
  http://localhost:3001/todos
```

</details>

## Stacks utilizadas

* Node.js
* TypeScript
* Express
* MongoDB
* Mongoose
* Docker


## Arquitetura

![Diagrama da arquitetura](/arch.png "Diagrama da arquitetura")
  
A estrutura que optei por aplicar tem com base a ideia de isolar a aplicação em três partes:
 ## api
 <p>
tem como objetivo isolar a ponta de conexão da aplicação, no caso foi utilizado express como framework http, mas posso substituir por outro como koajs ou até mesmo módulo http interno do nodejs, também deixa aberto para usar um ejs para construir uma aplicação monolítica ou um grpc para migrar para um micro serviço
</p>

## app

<p>
tem como objetivo isolar a principal parte da aplicação para que ela não seja dependente de framework, construída com orientação a objeto, está feita com uma arquitetura de camadas sendo elas:
</p>
<b>controllers:</b>
</p>
A camada de entrada que é usada para receber os dados providos do express, esta camada é responsável pela validação dos dados do usuário, tem como auxiliar a validators
</p>
<b>useCases:</b>
<p>
A camada de entrada que é usada para receber os dados providos do controller, esta camada é responsável pela aplicação das regras de negócio e tem como auxiliar a errors
</p>
<b>
Models:
</b>
<p>
A camada de entrada que é usada para receber os dados providos do useCase, esta camada é responsável comunicação com o banco de dados
</p>
<b>
Factories:
</b>
<p>
Usado para instanciar todo a parte de oop e exportar como elemento simplificado para ser usado pelo express já que o framework não é muito bom lidando com oop
</p>

## db

<p>
tem como objetivo isolar a tipo de banco da aplicação, no caso foi utilizado mongoDB, mas pode ser trocado por qualquer sql, graphql, grpc ou até mesmo outra api
</p>

