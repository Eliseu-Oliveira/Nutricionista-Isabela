const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/chatbot', (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let reply = "Desculpe, não entendi.";

  if (userMessage.includes('olá')) {
    reply = 'Olá! Como posso te ajudar?';
  } else if (userMessage.includes('serviços')) {
    reply = 'Oferecemos consultas nutricionais e acompanhamento.';
  } else if (userMessage.includes('pix')) {
    reply = 'Aqui está nosso QR code para pagamento via PIX.';
  }

  res.json({ reply });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
