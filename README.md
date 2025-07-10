# ⚡ Fastify REST API Boilerplate com TypeScript, Zod e CORS

> Estrutura base para construção de APIs REST modernas utilizando **Fastify**, **TypeScript**, **Zod** para validações e tipagem, além de suporte nativo a `.env`. Este projeto é ideal para iniciar novos backends de forma escalável, segura e tipada.

---

## 📌 Sobre o Projeto

Essa aplicação foi criada como um **boilerplate profissional** para backends em Node.js com:

- Validação e tipagem segura de dados e variáveis ambiente com `Zod`
- Suporte completo a `.env` (sem depender de `dotenv`)
- Execução moderna com `Ultracite`, sem necessidade de transpilar manualmente TypeScript
- Pronta para receber rotas REST, middlewares e integrações com banco de dados
- Linter e formatter com `Biome`, ferramenta moderna que unifica ESLint + Prettier

---

## 🧠 Funcionalidades

- ✅ Servidor HTTP com [Fastify](https://fastify.dev/)
- ✅ Suporte a CORS para integrações com front-end
- ✅ Validação de variáveis de ambiente com fallback padrão
- ✅ Tipagem e validação de dados com [Zod](https://zod.dev/)
- ✅ Scripts de desenvolvimento e produção prontos para uso
- ✅ Configuração moderna de TypeScript com suporte a ESM (`nodenext`)
- ✅ Linter e formatter com Biome (`biome.jsonc`)

---

## 📁 Estrutura do Projeto

```

├── src/
│   ├── server.ts       # Ponto de entrada da API (instancia o Fastify)
│   └── env.ts          # Validação e carregamento das variáveis ambiente
├── .env                # Variáveis de ambiente (ex: PORT)
├── package.json        # Scripts e dependências
├── tsconfig.json       # Configuração moderna do TypeScript
├── biome.jsonc         # Configuração do Biome (linter + formatter)
```

---

## 🚀 Tecnologias Utilizadas

| Tecnologia                 | Descrição                                                                |
|----------------------------|---------------------------------------------------------------------------|
| **Fastify**                | Framework leve e rápido para APIs HTTP                                    |
| **TypeScript**             | Tipagem estática moderna para JavaScript                                  |
| **Zod**                    | Validação e inferência de tipos                                           |
| **Ultracite**              | Executor de TypeScript direto no Node.js (sem transpilar)                 |
| **Biome**                  | Ferramenta moderna que combina linter, formatter e mais                   |
| **ES Modules (nodenext)**  | Suporte ao padrão moderno de módulos no Node.js                           |



## ⚙️ Como Executar

### 1. Clone o repositório
`git clone https://github.com/G4brielMoura/Rest-Api-Fastify.git` =>
`cd nome-do-repo`

### 2. Instale as dependências
`npm install`

### 3. Configure as variáveis de ambiente (opcional)
Crie um arquivo `.env` na raiz do projeto:
`PORT=3333`

### 4. Rode em modo de desenvolvimento
`npm run dev`

### 5. Rode em modo de Produção
`npm npm start`


---



### 1. Rota de saúde (Health Check)
GET http://localhost:3333/health

=> Resposta esperada: (Resposta esperada:`"Rodando Corretamente!"`)

---

## ⚙️  Scripts disponíveis

### 1. Inicia com watch e carregamento de .env
`npm run dev`
   
---
### 2. Roda a versão de produção
`npm start`     

---

### 3. Obs: Todos os scripts usam:

`node --env-file .env --experimental-strip-types ...`

---
#### => Isso permite executar arquivos `.ts` diretamente sem precisar compilar com `tsc.`


## ⚙️  Configuração do TypeScript

`module: nodenext` — suporte a ES Modules no Node.js

`target: es2022` — compatível com recursos modernos do JS/TS

`noEmit: true` — não gera arquivos JS ao compilar (não precisa!)

`allowImportingTsExtensions:` `true` — permite importar arquivos .ts diretamente

---
## ⚙️  Biome (Linter + Formatter)
=> Este projeto usa o Biome como ferramenta de linting e formatação:

### Rodando manualmente:

`npx biome lint .`

`npx biome format .`

---

### Você pode configurar o Biome para rodar ao salvar arquivos via extensão do VSCode.

---

## ⚙️ Sugestões de Expansão

### Essa estrutura é ideal para crescer. Você pode:

✅ Modularizar rotas com plugins do Fastify

🔐 Adicionar autenticação com JWT

🧾 Criar DTOs com validações avançadas com Zod

🧪 Adicionar testes com Vitest ou Jest

🛢 Integrar com bancos de dados usando Prisma ou Drizzle

📦 Publicar como pacote NPM ou template de criação de projeto

---

## ⚙️ Boas práticas aplicadas

- Uso de tipagem estática para segurança e previsibilidade

- Validação robusta das variáveis de ambiente logo no início

- Execução moderna sem necessidade de build manual

- Separação clara entre configuração, inicialização e lógica de rotas

---

## ⚙️ licença


Esse projeto está sob a licença [MIT](./LICENSE).  
<a href="./LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-brightgreen.svg" />
</a>

---

## ⚙️ Contribuições

Contribuições, sugestões e melhorias são sempre bem-vindas!
Abra uma issue ou envie um `pull request.`

---

## ⚙️ Observação Final

Esse projeto foi pensado para ser didático e escalável ao mesmo tempo. Ele serve como ponto de partida para APIs REST reais, com ferramentas modernas, tipagem forte e foco em boas práticas.

---

## ⚙️ Autor

Gabriel Moura
Estudante de Ciência da Computação, apaixonado por desenvolvimento web moderno com foco em JavaScript, TypeScript e o ecossistema Front-End.

<p align="left">
  <a href="https://www.linkedin.com/in/gabrielmouradev/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/G4brielMoura" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.instagram.com/gabrielmouradev/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
</p>

---














