# AIDA — Tutor Imersivo de Inglês com IA
> Powered by LibreChat + Groq · Hospedado em Railway · Domínio: Experiasolutions.com.br

AIDA (Aquisição Imersiva Dinâmica Acelerada) é uma interface web de chat com IA para aprendizado de inglês por imersão, seguindo o **Método AIDA** criado por Gabriel Ferreira (Experia Solutions).

## ⚡ Stack
- **Frontend/Backend:** [LibreChat](https://github.com/danny-avila/LibreChat) (open-source)
- **LLM:** Groq (llama-3.3-70b-versatile)
- **Database:** MongoDB Atlas (conversas + usuários)
- **Hosting:** Railway
- **Domain:** aida.experiasolutions.com.br

## 🧠 O Método AIDA
O método é baseado na Hipótese do Insumo de Krashen (i+1) e na teoria BICS/CALP de Cummins.

**Regras absolutas do tutor:**
- ❌ Nunca corrigir erros explicitamente
- ❌ Nunca criar exercícios de gramática isolada
- ❌ Nunca quebrar o personagem
- ✅ Sempre modelar a forma correta naturalmente
- ✅ Sempre terminar com um gancho conversacional

## 🚀 Deploy (Railway)
1. Fork ou clone este repositório
2. Crie um projeto no [Railway](https://railway.app)
3. Configure as variáveis de ambiente (ver `.env.aida.example`)
4. Railway detecta o `Dockerfile` automaticamente e faz o build

## ⚙️ Variáveis de Ambiente Obrigatórias
| Variável | Descrição |
|---|---|
| `MONGO_URI` | URI do MongoDB Atlas |
| `GROQ_API_KEY` | Chave da API Groq |
| `JWT_SECRET` | Secret para sessões (gerar aleatório) |
| `JWT_REFRESH_SECRET` | Secret para refresh tokens |
| `CREDS_KEY` | Chave de criptografia (32 chars hex) |
| `CREDS_IV` | IV de criptografia (16 chars hex) |
| `DOMAIN_CLIENT` | URL pública do app (ex: https://aida.experiasolutions.com.br) |
| `DOMAIN_SERVER` | Igual ao DOMAIN_CLIENT |

## 🗂️ Arquivos de Configuração AIDA
- `librechat.yaml` — Configura o endpoint Groq e o system prompt da AIDA
- `railway.toml` — Configuração de deploy no Railway
- `.env.aida.example` — Template das variáveis de ambiente
