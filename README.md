# DNC-Desafio6

Modelagem de um banco de dados relacional juntamente com uma API integrando esse banco

## Modelagem do Banco de Dados

![Banco de Dados](https://github.com/iLuiszin/DNC-Desafio6/assets/79981019/971f9abf-aab4-4aae-ad4e-e4b8b86461f3)


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE="nome do banco de dados"`

`USER="usuario do banco de dados"`

`PASSWORD="senha do banco"`

## Documentação da API

#### Retorna todos os clientes

```http
  GET /cliente/listar
```

#### Insere um cliente no banco de dados

```http
  POST /cliente/criar
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `nome`    | `string` | **Obrigatório**. O nome do cliente  |
| `email`   | `string` | **Obrigatório**. O email do cliente |

#### Retorna todos os produtos

```http
  GET /produto/listar
```

#### Retorna os produtos de um tipo específico

```http
  GET /produto/listar/:tipo
```

#### Insere um produto no banco de dados

```http
  POST /produto/criar
```

| Parâmetro    | Tipo     | Descrição                                |
| :----------- | :------- | :--------------------------------------- |
| `nome`       | `string` | **Obrigatório**. O nome do produto       |
| `descricao`  | `string` | **Obrigatório**. A descrição do produto  |
| `preco`      | `number` | **Obrigatório**. O preço do produto      |
| `quantidade` | `number` | **Obrigatório**. A quantidade do produto |
| `tipo`       | `string` | **Obrigatório**. O tipo do produto       |

#### Retorna todos os pedidos

```http
  GET /pedido/listar
```

#### Insere um pedido no banco de dados

```http
  POST /pedido/criar
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `data`    | `date`   | **Obrigatório**. A data do pedido   |
| `status`  | `string` | **Obrigatório**. O status do pedido |
| `VendaId` | `number` | **Obrigatório**. O id da venda      |

#### Retorna todos as vendas

```http
  GET /venda/listar
```

#### Insere uma venda no banco de dados

```http
  POST /venda/criar
```

| Parâmetro   | Tipo     | Descrição                               |
| :---------- | :------- | :-------------------------------------- |
| `data`      | `date`   | **Obrigatório**. A data da venda        |
| `total`     | `number` | **Obrigatório**. O valor total da venda |
| `ClienteId` | `number` | **Obrigatório**. O id do cliente        |
| `ProdutoId` | `number` | **Obrigatório**. O id do produto        |

#### Retorna todos os produtos no estoque

```http
  GET /estoque/listar
```
