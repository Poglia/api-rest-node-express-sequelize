# 📚 Projeto de API Rest de Serviços Web (Node-express-sequelize)

Este projeto é uma API construída para a matéria de Serviços Web, utilizando PostgreSQL, Express, Sequelize e Swagger. A API gerencia duas tabelas principais: **Livros** e **Frases**.

## 🚀 Tecnologias Utilizadas

### PostgreSQL
PostgreSQL é um sistema de gerenciamento de banco de dados objeto-relacional conhecido por sua robustez, extensibilidade e conformidade com os padrões SQL.

### Express
Express é um framework web minimalista para Node.js, utilizado para construir aplicativos web e APIs com rapidez e facilidade.

### Sequelize
Sequelize é um ORM (Object-Relational Mapping) para Node.js que suporta vários bancos de dados SQL. Ele facilita a interação com o banco de dados, permitindo a definição de modelos de dados e operações de CRUD (Create, Read, Update, Delete) de forma simplificada.

### Swagger
Swagger é uma ferramenta para design, construção e documentação de APIs RESTful. Ele facilita a criação de uma documentação interativa, onde os usuários podem testar as APIs diretamente.

### Nodemon (Instalação Global)
Nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js reiniciando automaticamente a aplicação quando arquivos no diretório são alterados.

### TS-Node (Instalação Global)
TS-Node é um interpretador TypeScript para Node.js, que permite executar diretamente arquivos TypeScript sem a necessidade de pré-compilação.


## 📘 Documentação da API

A documentação completa da API está disponível através do Swagger. Para acessá-la, execute o projeto e abra o navegador em `http://localhost:4000/api-docs`.

## 🗂️ Modelos de Dados

### Livros

| Campo       | Tipo      | Descrição                    |
|-------------|-----------|------------------------------|
| id          | INTEGER   | Identificador único          |
| title       | TEXT      | Título do livro              |
| author      | TEXT      | Autor do livro               |

### Frases

| Campo       | Tipo      | Descrição                    |
|-------------|-----------|------------------------------|
| id          | INTEGER   | Identificador único          |
| text        | TEXT      | Conteúdo da frase            |
| author      | TEXT      | Author da frase              |

## 🔧 Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/projeto-api.git
   ```
2. Instale as dependências:
   ```sh
   cd projeto-api
   npm install
   ```
3. Configure o banco de dados em `config/config.json`.
4. Execute as migrações para criar as tabelas:
   ```sh
   npx sequelize db:migrate
   ```
5. Inicie o servidor:
   ```sh
   npm start
   ```
6. Acesse `http://localhost:3000` no seu navegador.

## 📄 SQL de Criação das Tabelas

### Livros
```sql
CREATE TABLE IF NOT EXISTS public.books
(
    id integer NOT NULL,
    author text COLLATE pg_catalog."default",
    title text COLLATE pg_catalog."default",
    CONSTRAINT books_pkey PRIMARY KEY (id)
)

```

### Frases
```sql
CREATE TABLE IF NOT EXISTS public.phrases
(
    id integer NOT NULL DEFAULT nextval('phrases_id_seq'::regclass),
    text text COLLATE pg_catalog."default" NOT NULL,
    author text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT phrases_pkey PRIMARY KEY (id)
)

```

## 📞 Contato

Para mais informações, entre em contato pelo e-mail: [pedro.poglia@hotmail.com](mailto:seu-email@dominio.com)

---
