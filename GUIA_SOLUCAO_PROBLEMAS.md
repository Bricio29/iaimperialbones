# Guia de Solução de Problemas — IA Imperial Bonés

## ✅ Inicialização

```bash
npm install   # primeira vez
npm start     # iniciar servidor
```

Comportamento esperado:
```
🚀 ================================
🤖 IA Imperial Bonés — CHATCLEAN MODE
📡 Servidor rodando na porta 3000
🔗 Webhook URL: http://SEU_IP:3000/webhook
❤️  Health:     http://SEU_IP:3000/health
🚀 ================================
```

---

## 🔧 Problemas Comuns

### Bot não responde às mensagens

**Causa 1:** CC_PUSH_URL não configurado  
**Solução:** Verifique o `.env` e certifique-se que `CC_PUSH_URL` está preenchido corretamente

**Causa 2:** Webhook não apontando para o servidor  
**Solução:** No ChatClean → Configurações → API/Webhook, confirme que a URL Webhook aponta para `http://SEU_IP:3000/webhook`

**Causa 3:** Servidor não está rodando  
**Solução:**
```bash
npm start
# Verificar se porta 3000 está livre:
# Windows: netstat -an | findstr 3000
# Linux:   lsof -i :3000
```

---

### Imagens não são enviadas

**Causa 1:** `BASE_URL` não configurado  
**Solução:** Defina `BASE_URL` no `.env` com a URL pública do servidor (ex: `https://seudominio.com`)

**Causa 2:** Arquivo de imagem não existe  
**Solução:** Verifique se as imagens estão nas pastas corretas com os nomes corretos (ver `assets/README.md`)

Logs de debug durante envio:
```
📤 Enviando imagem para 5584999999999: ./assets/modelos/snapback.jpeg
✅ Imagem enviada: ./assets/modelos/snapback.jpeg
```

Se aparecer `⚠️ Imagem não encontrada`, o arquivo não existe no caminho indicado.

---

### Porta 3000 já em uso

```bash
# Linux/Mac
pkill -9 node

# Windows (PowerShell)
Get-Process node | Stop-Process -Force
```

---

### Lead não recebe notificação da equipe

**Causa:** `EQUIPE_NUMERO` não configurado ou número errado  
**Solução:** Defina `EQUIPE_NUMERO` no `.env` com o número completo (ex: `5584999999999`)

---

### Resetar conversa de um cliente

Envie `/reset` no WhatsApp do cliente para reiniciar o fluxo do zero.

---

## 📊 Verificar saúde do servidor

```
GET http://SEU_IP:3000/health
```

Retorno esperado:
```json
{ "status": "ok", "uptime": 123.45, "timestamp": "2026-06-23T..." }
```

---

## 📸 Fluxo de envio de imagens

1. Cliente informa objetivo (ex: "Uniforme para minha equipe")
2. Sistema detecta `usoEvento` e marca `querVerModelos: true`
3. Bot envia mensagem introdutória
4. Bot envia 3 fotos de produtos recomendados com legenda
5. Cliente escolhe o produto
6. Bot exibe técnicas de personalização
7. Cliente escolhe a técnica
8. Bot exibe reguladores (se aplicável)
9. Qualificação completa → Resumo enviado para a equipe

---

## 💡 Dicas

1. **SEMPRE use `npm start`** — nunca `node index.js` diretamente em produção
2. **Monitore os logs** do terminal para identificar problemas
3. **Não rode múltiplas instâncias** ao mesmo tempo
4. **Mantenha o `.env` atualizado** com as chaves corretas
