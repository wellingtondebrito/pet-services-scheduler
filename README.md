
# 🐾 Plataforma de Agendamento e Serviços Pet (Pet-Services)

Status do Projeto: 🚧 Em Desenvolvimento

Esta é uma aplicação Full Stack modularizada que conecta tutores de pets (Pet Owners) a prestadores de serviços (Pet Providers), como creches, passeadores e pet sitters. O foco é em uma arquitetura robusta, segurança de dados e funcionalidades avançadas de geolocalização.




## 💻 Tecnologias Utilizadas

**Back-end (pet-services-api)** 
- Framework: NestJS (Node.js) ⚡️

- Linguagem: TypeScript

- ORM: Prisma ORM

- Banco de Dados: PostgreSQL

- Autenticação: JWT (JSON Web Tokens)

- Storage de Arquivos: Supabase Storage

**Front-end (pet-services-ui)**
- Framework: Next.js (React)
- Estilização: Tailwind CSS
- Linguagem: TypeScript


## 🎯 Arquitetura e Principais Funcionalidades

**1. Segurança e Governança de Dados**

- Autorização por Papéis: Sistema de autorização baseado em JWT e Guards que permite o gerenciamento de permissões (ADMIN, PET_OWNER, PET_PROVIDER).
- Soft Delete Robusto: Implementação do padrão Soft Delete com deletedAt e status (Prisma ORM) para gestão do ciclo de vida da conta.
- Exclusão Segura de Assets: Lógica de Hard Delete no Supabase Storage (limpeza de avatares) que é executada apenas após a confirmação do Soft Delete no banco de dados.

**2. Funções de Negócio**
- Busca por Geolocalização: Endpoint avançado de pesquisa de Pet Providers por coordenadas (latitude, longitude).
- Gerenciamento de Conta: Rotas protegidas para auto-desativação de perfil e rotas administrativas de gestão de status.


## ⚙️ Estrutura do Repositório
O projeto está organizado em dois subdiretórios principais:
- pet-services-api/: Contém todo o código-fonte do NestJS.
- pet-services-ui/: Contém todo o código-fonte do Next.js.
## 🚀 Como Inicializar o Projeto

**Pŕe-requisitos**
- Node.js (versão 18+)
- Docker (opcional, para rodar o PostgreSQL localmente)
- Conta Supabase.

**Configuração do Back-end (`pet-services-api `)**
1. Acesse o diretório: ` cd pet-services-api 

2. Instale as dependências:  `npm install `

3. Configure o arquivo .env.

4. Execute as migrações do Prisma: `npx prisma migrate dev 

5. Inicie a aplicação: `npm run start:dev `

**Configuração do Front-end (pet-services-ui)**
1. Acesse o diretório: `cd pet-services-ui`

2. Instale as dependências: `npm install`

3. Configure o arquivo `.env.local.

4. Inicie a aplicação: `npm run dev`


## 🔑 Variáveis de Ambiente (`.env ` - Back-end)

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

### 💾 Configuração do Banco de Dados (Prisma/PostgreSQL)

`DATABASE_URL="postgresql://user:password@localhost:5432/petdb?schema=public"`

### 🔒 Chave Secreta para Assinatura de Tokens (JWT)
#### Use uma string longa e aleatória (ex: gerador de UUID)

`JWT_SECRET_KEY="SUA_CHAVE_SECRETA_MUITO_FORTE_AQUI"`

### ☁️ Credenciais do Supabase (para Storage)

#### URL da API do projeto Supabase

`SUPABASE_URL="https://[YOUR_REF].supabase.co"` 
#### Service Role Key (ou Anon Key, dependendo da sua política de segurança)
`SUPABASE_KEY="SUA_CHAVE_DE_ACESSO_AO_SUPABASE_AQUI" ` 


## 🌟 Próximos Passos e Roadmap

As funcionalidades a seguir estão planejadas para as próximas iterações do projeto:

### Módulo de Agendamentos (Core Business) 📅
- Agendamento de Serviços: Implementação da lógica de criação, visualização e cancelamento de agendamentos (vínculo entre PetOwner e PetProvider).
- Disponibilidade: Desenvolvimento de um sistema de calendário para o Pet Provider gerenciar seus horários disponíveis e bloqueados.

### Módulo Financeiro e Transacional 💳
- Integração de Pagamentos: Implementação de um gateway de pagamento (ex: Stripe ou PagSeguro) para processar transações de agendamentos.
- Gestão de Subscrições: Criação de rotas para o Pet Provider gerenciar planos de assinatura ou taxas de serviço.

### Módulo de Comunicação e Experiência ✨
- Notificações em Tempo Real: Integração com serviços de e-mail ou WebSockets para notificar usuários sobre confirmações, lembretes ou cancelamentos de agendamentos.
- Avaliações e Reviews: Implementação da funcionalidade de Pet Owners avaliarem o Pet Provider após a conclusão do serviço.


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Autores

- [wellingtondebrito](https://github.com/wellingtondebrito)


