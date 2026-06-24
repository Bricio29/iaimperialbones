# Guia de Configuração no Kommo

Após fazer o deploy do servidor no Easypanel e ter a URL pública,
siga estes passos para ativar a IA dentro do Kommo.

---

## Passo 1 — Preparar as imagens do widget

Adicione dois arquivos PNG na pasta `widget/images/`:

| Arquivo     | Tamanho      |
|-------------|--------------|
| `logo.png`  | 60 × 60 px   |
| `cover.png` | 400 × 272 px |

Pode ser a logo da Imperial Bonés ou qualquer imagem.

---

## Passo 2 — Criar o arquivo ZIP do widget

Compacte o **conteúdo** da pasta `widget/` (não a pasta em si):

```
widget.zip
├── manifest.json
├── script.js
├── images/
│   ├── logo.png
│   └── cover.png
└── i18n/
    ├── pt.json
    ├── en.json
    └── es.json
```

> ⚠️ Os arquivos devem estar na raiz do ZIP, não dentro de uma subpasta.

**No Windows:**
1. Abra a pasta `widget/`
2. Selecione todos os arquivos e pastas dentro dela
3. Clique com botão direito → Compactar em arquivo ZIP
4. Nomeie como `imperial-bones-ia.zip`

---

## Passo 3 — Instalar o widget no Kommo

1. Acesse **Configurações → Integrações** no Kommo
2. Clique em **"Criar integração"** (ou "Fazer upload")
3. Selecione **Privada**
4. Faça upload do `imperial-bones-ia.zip`
5. Salve → o widget ficará disponível na conta

---

## Passo 4 — Criar o Salesbot

1. Acesse **Configurações → Salesbots**
2. Clique em **"Criar Salesbot"**
3. Nome: `IA Imperial Bonés`
4. No construtor do bot, adicione um bloco do tipo **"IA Imperial Bonés"**
   (aparece na lista de widgets disponíveis)
5. No campo **"URL do servidor da IA"**, informe:
   ```
   https://SEU_DOMINIO_EASYPANEL/salesbot
   ```
6. Salve o Salesbot e anote o ID (aparece na URL da página)

---

## Passo 5 — Configurar o Digital Pipeline (automação)

1. Acesse qualquer funil → clique em **"Digital Pipeline"**
2. Adicione uma nova automação no evento:
   **"Quando receber mensagem do cliente"**
3. Ação: **"Iniciar Salesbot"** → selecionar `IA Imperial Bonés`
4. Salve

> Agora toda mensagem nova no WhatsApp Lite vai disparar o bot automaticamente.

---

## Passo 6 — Testar

1. Envie uma mensagem de um número de teste para o WhatsApp conectado ao Kommo
2. A mensagem deve aparecer no Kommo
3. Em alguns segundos, a IA deve responder pela mesma conversa
4. Verifique no terminal do servidor os logs de processamento

---

## Variáveis de ambiente necessárias no servidor

```env
OPENAI_API_KEY=sk-...
KOMMO_SUBDOMAIN=imperialbones
KOMMO_TOKEN=eyJ...          ← necessário apenas para criar leads
KOMMO_PIPELINE_ID=...
KOMMO_STATUS_ID_NOVO=...
KOMMO_RESPONSIBLE_USER_ID=...
BASE_URL=https://SEU_DOMINIO_EASYPANEL
PORT=3000
```

> O `KOMMO_TOKEN` ainda é necessário para criar o deal quando o lead qualifica.
> Para o envio de mensagens via Salesbot, não é necessário — o Salesbot cuida disso.

---

## Como funciona após configurado

```
Cliente manda WhatsApp
    ↓ aparece no Kommo (WhatsApp Lite)
Digital Pipeline dispara o Salesbot
    ↓ Salesbot chama POST /salesbot no nosso servidor
Servidor processa com GPT-4o-mini
    ↓ responde via return_url
Salesbot envia a resposta pelo WhatsApp Lite
    ↓ cliente recebe no WhatsApp ✅
    ↓ resposta aparece na conversa do Kommo ✅

Quando lead qualificado:
Servidor chama Kommo CRM API
    ↓ deal criado no pipeline ✅
Time assume o atendimento pelo Kommo ✅
```
