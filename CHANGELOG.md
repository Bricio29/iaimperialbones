# Changelog — IA Imperial Bonés Personalizados

## [1.2.0] — 2026-06-23

### 🔄 Migração de plataforma: ChatClean → Kommo CRM

Toda a camada de integração foi reescrita para o Kommo. Não há mais dependência do ChatClean.

#### Mudanças em `index.js`

- **Config**: `CC_PUSH_URL` e `EQUIPE_NUMERO` removidos. Novas vars: `KOMMO_SUBDOMAIN`, `KOMMO_TOKEN`, `KOMMO_PIPELINE_ID`, `KOMMO_STATUS_ID_NOVO`, `KOMMO_RESPONSIBLE_USER_ID`
- **`kommoSendText(talkId, text)`**: envia texto via `POST /api/v4/talks/{talkId}/messages`
- **`kommoSendImage(talkId, filePath, caption)`**: envia imagem com `attachments[].url` via URL pública
- **`criarLeadKommo(leadData, contactId, opcoes)`**: cria deal no Kommo ao finalizar qualificação + adiciona nota com resumo completo
- **`enviarMensagem(chatId, texto)`**: agora busca `talkId` em `leadData.talkId` para rotear via Kommo
- **`enviarImagens(chatId, arquivos, legenda)`**: idem — usa talkId do lead
- **`parsePayload(body)`**: reescrito para formato Kommo (`message.add[0]` com `contact_id`, `talk_id`, `author.type`)
- **`processarMensagem`**: recebe e persiste `talkId` em `leadData.talkId` a cada mensagem
- **Webhook handler**: aceita `application/x-www-form-urlencoded` (Kommo) e `application/json` (testes); responde 200 antes de processar
- **Finalização de lead**: substituído `enviarMensagem(EQUIPE_NUMERO, resumo)` por `criarLeadKommo()` — deal aparece no pipeline do Kommo com nota automática
- **Transbordo +100 unid**: idem — cria lead com tag `Transbordo+100`

#### `.env.example` atualizado

Variáveis Kommo documentadas com instruções de onde obter cada valor.

#### Vault Obsidian — pasta `Kommo/` criada

- `INDEX.md` — visão geral da plataforma
- `autenticacao.md` — Long-lived Token vs OAuth 2.0
- `webhooks.md` — formato de payload e handler Express
- `api-chats-mensagens.md` — envio de texto e imagens
- `api-leads.md` — criação e atualização de deals
- `api-contatos.md` — busca e criação de contatos
- `integracao-ia-externa.md` — arquitetura completa + snippets de código

---

## [1.1.0] — 2026-06-23

### 📚 Atualização com documentação completa do cliente

Leitura e incorporação de todos os PDFs e imagens da pasta `/docs`:
- `TABELA DE PREÇOS - ATUAL.pdf`
- `Imperial Bonés Personalizados.pdf`
- `CATÁLOGO - BONÉS e VISEIRAS.pdf`
- `CATÁLOGO CHAPÉUS.pdf`
- `Catálogo de Tecidos e Cores - IMPERIAL.pdf`
- `DESCRIÇÕES 6 GOMOS.pdf`
- `DESCRIÇÕES TRUCKER e AMERICANO.pdf`

### Mudanças em `index.js`

- **EMPRESA_INFO**: pedido mínimo (30 un padrão, 25 com +R$1,50/un), prazo correto (22-24 dias úteis), pagamento (50%+50%), dados bancários Nubank, PIX CNPJ
- **CATALOGO_MODELOS**: descrições expandidas com os 3 níveis de qualidade por produto; Chapéus com todos os 5 tipos (Proteção, Bucket Hat, Juta, Palha, Cata Ovo); preços de referência por nível
- **NIVEIS_QUALIDADE** (novo): constante com specs completas Básico (Tactel), Essencial (Oxford), Premium (Supercap + Brim)
- **TECIDOS_E_CORES** (novo): paleta completa por material — Supercap (24 cores), Oxford, Tela Paranaense, Tela Resinada, Alfaiataria, Brim, Camurça, Especiais para aba
- **gerarRespostaIA**: prompt atualizado com descrições completas de chapéus, técnicas por nível, tabela de preços, cores, pedido mínimo e pagamento
- **recomendarModelos**: novos gatilhos — praia/festival, sertanejo/agro → chapéus; fitness/tenis → viseira
- **extrairInformacoesComIA**: mapeamento dos tipos de chapéu (juta, bucket, palha, cata ovo, proteção)

### Pendências de configuração

- [ ] Fotos dos produtos em `assets/modelos/`
- [ ] Fotos das técnicas em `assets/tecnicas/`
- [ ] Fotos dos reguladores em `assets/reguladores/`
- [ ] Configurar `.env` com chaves reais

---

## [1.0.0] — 2026-06-23

### 🚀 Lançamento inicial

- Projeto criado baseado na IA Bonés Ramalho (v2.0.0)
- Adaptado para Imperial Bonés Personalizados (Serra Negra do Norte-RN)
- Modo: ChatClean Webhook (sem WhatsApp Web / QR Code)
- Catálogo inicial de 6 produtos, 7 técnicas, 3 reguladores
