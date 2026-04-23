# 🚀 API NestJS com JWT e MySQL

## 📌 Descrição
Esta aplicação é uma API REST desenvolvida com NestJS, utilizando Sequelize para integração com banco de dados MySQL e autenticação baseada em JWT (JSON Web Token).

O sistema permite:
- Cadastro e autenticação de usuários
- Proteção de rotas com JWT
- Gerenciamento completo de clientes (CRUD)

---

## 🎯 Objetivo
Demonstrar a construção de um backend moderno utilizando:
- Arquitetura modular
- Autenticação segura
- Integração com banco relacional
- Boas práticas com TypeScript

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- NestJS
- Sequelize
- MySQL
- JWT
- bcrypt
- TypeScript

---

## 📂 Estrutura do Projeto
src/
├── auth/
├── user/
├── client/
├── app.module.ts
├── main.ts


---

## 🔐 Autenticação

### 📌 Registrar Usuário

POST /auth/register
```
{
  "nome": "Gabriel",
  "email": "gabriel@email.com",
  "password": "123456"
}
````
## Respotas 
```
{
  "access_token": "TOKEN_JWT"
}
```

## 🛡️ Autorização

Para acessar rotas protegidas:
```
Authorization: Bearer SEU_TOKEN
```

## ▶️ Como Executar

Instalar dependências:
````
npm install
```
Rodar o projeto:
```
npm run start:dev

````

## 🧪 Fluxo de Uso
Registrar usuário
Fazer login
Receber token JWT
Acessar rotas protegidas
Realizar CRUD de clientes
## 📊 Fluxo do Sistema
User → Login → JWT → Acesso → CRUD Client
## 🎓 Conceitos Aplicados
- Arquitetura modular
- DTO
- Injeção de dependência
- JWT
- ORM (Sequelize)
