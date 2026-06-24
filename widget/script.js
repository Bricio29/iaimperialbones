define(['jquery'], function ($) {
  return {
    // Callbacks obrigatórios pelo Kommo
    render: function () { return true; },
    init: function () { return true; },
    bind_actions: function () { return true; },
    settings: function () { return true; },

    /**
     * Chamado quando o usuário salva o bloco no Salesbot Designer.
     * Retorna a sequência de steps JSON que o Salesbot vai executar.
     *
     * handler_code  → código único gerado pela Kommo para este bloco
     * params        → objeto com os campos configurados (webhook_url)
     */
    onSalesbotDesignerSave: function (handler_code, params) {
      var webhookUrl = (params && params.webhook_url)
        ? params.webhook_url.trim()
        : '';

      if (!webhookUrl) {
        alert('Informe a URL do webhook da IA Imperial Bonés.');
        return false;
      }

      // Dados enviados ao servidor a cada mensagem do cliente
      var requestData = {
        message:    '{{message_text}}',
        contact_id: '{{contact.id}}',
        lead_id:    '{{lead.id}}'
      };

      // Step único: chama nosso servidor e aguarda a resposta
      var step = {
        question: [
          {
            handler: 'widget_request',
            params: {
              url:  webhookUrl,
              data: requestData
            }
          }
        ],
        require: []
      };

      return JSON.stringify([step]);
    }
  };
});
