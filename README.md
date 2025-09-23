# 📝 ToDo API

API RESTful para gerenciamento de tarefas (ToDo List), construída com **Node.js**, **Express** e **PostgreSQL**.  
Este projeto foi desenvolvido como prática para consolidar conhecimentos em back-end moderno, seguindo boas práticas de mercado (arquitetura em camadas, versionamento, tratamento de erros e variáveis de ambiente).

---

## 🚀 Tecnologias
- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [PostgreSQL](https://www.postgresql.org/)  
- [pg](https://node-postgres.com/) – client oficial do Postgres  
- [dotenv](https://github.com/motdotla/dotenv) – gerenciamento de variáveis de ambiente  
- [nodemon](https://nodemon.io/) – reload automático no desenvolvimento  

---

## 📂 Estrutura do projeto

```
todo-api/
  ├── src/
  │   ├── config/         # Configurações (ex: conexão ao banco)
  │   ├── controllers/    # Lógica das rotas
  │   ├── errors/         # Tratamento de erros customizados
  │   ├── middlewares/    # Middlewares globais (ex: error handler)
  │   ├── models/         # Acesso ao banco de dados
  │   ├── routes/         # Definição das rotas
  │   └── server.js       # Ponto de entrada da aplicação
  ├── .env.example        # Exemplo de variáveis de ambiente
  ├── .gitignore
  ├── package.json
  └── README.md
```

---

## 🗄️ Banco de Dados

Criação da tabela de tarefas (`todos`):

```sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE todos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  done BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## ⚙️ Configuração do ambiente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/todo-api.git
   cd todo-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo `.env` com base no `.env.example`:
   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5452
   DB_USER=postgres
   DB_PASSWORD=sua_senha
   DB_NAME=todo_db
   ```

4. Suba a API em modo desenvolvimento:
   ```bash
   npm run dev
   ```

A API estará disponível em:  
👉 `http://localhost:3000`

---

## 📌 Endpoints

### ➕ Criar tarefa
`POST /todos`  
Body:
```json
{ "title": "Estudar Node.js" }
```

### 📃 Listar tarefas
`GET /todos`

### ✏️ Editar título
`PUT /todos/:id`  
Body:
```json
{ "title": "Novo título da tarefa" }
```

### ✅ Concluir tarefa
`PATCH /todos/:id/done`  
Body:
```json
{ "done": true }
```

### 🗑️ Deletar tarefa
`DELETE /todos/:id`

---

## 🛡️ Tratamento de erros

A API possui middleware global para erros.  
Exemplo de erro 400:
```json
{ "error": "Title is required" }
```

Exemplo de erro 500:
```json
{ "error": "Internal Server Error" }
```

---

## 📜 Licença
Este projeto é apenas para fins de estudo.
