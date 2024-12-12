# Gerenciamento de Livros - API CRUD

Este projeto é uma API CRUD para o gerenciamento de livros em uma biblioteca, desenvolvida com Node.js, Express, SQLite e Prisma. A API permite o cadastro, listagem, atualização e exclusão de livros.

---

## Funcionalidades

- **Cadastrar Livro**: Adicionar um novo livro ao banco de dados.
- **Listar Livros**: Exibir todos os livros cadastrados.
- **Buscar Livro por ID**: Recuperar informações de um livro específico.
- **Atualizar Livro**: Editar os dados de um livro existente.
- **Excluir Livro**: Remover um livro do banco de dados.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **SQLite**
- **Prisma ORM**
- **TypeScript**
- **Nodemon**

---

## Requisitos de Sistema

- Node.js (v16 ou superior)
- NPM ou Yarn
- SQLite

---

## Configuração do Projeto

### 1. Clone o Repositório
```bash
git clone https://github.com/pp-gomes/Gerenciamento-de-Livros
cd Gerenciamento-de-Livro
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configure o Banco de Dados
Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
DATABASE_URL="file:./dev.db"
```

### 4. Execute as Migrações
Configure o banco de dados e crie as tabelas com os comandos:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Inicie o Servidor
Execute o servidor no ambiente de desenvolvimento:

```bash
npm run dev
```

---

## Endpoints da API

### 1. **Cadastrar Livro**
- **POST** `/livros`
- **Body** (JSON):
  ```json
  {
    "titulo": "O Senhor dos Anéis",
    "autor": "J.R.R. Tolkien",
    "anoPublicacao": 1954,
    "genero": "Fantasia"
  }
  ```

### 2. **Listar Livros**
- **GET** `/livros`

### 3. **Buscar Livro por ID**
- **GET** `/livros/:id`

### 4. **Atualizar Livro**
- **PUT** `/livros/:id`
- **Body** (JSON):
  ```json
  {
    "titulo": "O Hobbit",
    "autor": "J.R.R. Tolkien",
    "anoPublicacao": 1937,
    "genero": "Fantasia"
  }
  ```

### 5. **Excluir Livro**
- **DELETE** `/livros/:id`

---

## Estrutura de Pastas

```
my-projeto/
├── prisma/
│   ├── schema.prisma       # Modelo do banco de dados
├── src/
│   ├── controllers/
│   │   ├── livroController.ts  # Lógica de negócio
│   ├── routers/
│   │   ├── livroRouter.ts      # Rotas da API
│   ├── index.ts                # Ponto de entrada da aplicação
├── .env                        # Variáveis de ambiente
├── package.json                # Configurações e dependências
├── tsconfig.json               # Configuração do TypeScript
├── README.md                   # Documentação do projeto
```

---

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Para começar:

1. Fork o repositório
2. Crie sua feature branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Minha nova feature'`
4. Faça o push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

