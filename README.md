# Mamboo Todo List

## Documentação

A documentação de operação da API foi feita utilizando `Swagger`, e pode ser consultada de forma interativa através da primeira rota da api: `localhost:3001/`, enquanto os demais endpoint são contidos no : `localhost:3001/todos/`

Além de explicar e exemplificar a utilização da API, as páginas ainda permitem testar os endpoints diretamente pela interface gráfica da documentação.

## Rodando Aplicação

A execução da aplicação com `Docker` ou `Node`.

<details>
  <summary><b>Docker</b></summary><br>


Obs: você precisa ter o docker, npm/yarn e git na sua máquina para conseguir proseguir

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

<details>
  <summary><b>Node</b></summary><br>

Obs: para rodar a aplicação dessa forma você precisar ter node, git, npm/yarn, mongodb na sua maquina

1. Clone o projeto

```bash
    git clone git@github.com:RoyMusthang/mamboo-todo.git
```

2. Entre no diretório do projeto

```bash
  cd Mamboo-Kanban-API
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


## Arquitetura

![Diagrama da arquitetura](/arch.png "Diagrama da arquitetura")


