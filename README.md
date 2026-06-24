# IA Imperial Bonés Personalizados — WhatsApp Bot

Bot de atendimento automatizado via WhatsApp com qualificação inteligente de leads e envio de imagens de produtos.

## 🚀 Instalação

```bash
npm install
npm start
```

## ⚙️ Configuração

Crie o arquivo `.env` a partir do `.env.example`:

```env
OPENAI_API_KEY=sua_chave_aqui
CC_PUSH_URL=https://betaapi.chatclean.com.br/v1/api/external/SEU-UUID/?token=SEU-JWT
BASE_URL=https://seudominio.com.br
WEBHOOK_SECRET=segredo_opcional
PORT=3000
EQUIPE_NUMERO=5584999999999
```

## 📸 Imagens

Adicione as imagens dos produtos em:

- `assets/modelos/` — produtos (snapback.jpeg, trucker.jpeg, dad-hat.jpeg, chapeu.jpeg, viseira.jpeg, bolsa.jpeg)
- `assets/tecnicas/` — técnicas de personalização (silk3d.jpeg, bordado3d.jpeg, sublimacao.jpeg, dtf.jpeg, patch-laser.jpeg, patch-silk.jpeg, dtf-relevo.jpeg)
- `assets/reguladores/` — opções de regulador (regulador-plastico.jpeg, metalica-tipo1.jpeg, metalica-tipo2.jpeg)

Ver `assets/README.md` para detalhes.

## 🔗 Webhook

Configure o webhook no ChatClean em **Configurações → API/Webhook** apontando para:

```
http://SEU_SERVIDOR:3000/webhook
```

## 🤖 Funcionalidades

- Qualificação inteligente de leads
- Recomendação personalizada de produtos por objetivo
- Envio de imagens das técnicas de personalização
- Respostas sobre prazos, frete e técnicas disponíveis
- Transbordo automático para humanos (pedidos 100+ unidades)
- Suporte a áudio (transcrição via Whisper)
- Follow-up automático por inatividade (30 min)

## 📦 Produtos

- Snapback, Trucker, Dad Hat
- Chapéu, Viseira
- Bolsa Personalizada

## ✏️ Técnicas de Personalização

Silk 3D · Bordado 3D · Sublimação · DTF · Patch Couro Laser · Patch Couro Silk · DTF com Relevo

---

**Imperial Bonés Personalizados** | Serra Negra do Norte-RN | Desde 2017 | @imperialbones
