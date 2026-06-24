#!/bin/bash

# Script de inicialização — IA Imperial Bonés Personalizados (Webhook Mode)

echo "🧹 Parando processos Node existentes..."
pkill -9 node 2>/dev/null
pkill -9 nodemon 2>/dev/null
sleep 1

echo "✅ Pronto!"
echo "🚀 Iniciando servidor webhook da IA Imperial Bonés..."
echo ""

node index.js
