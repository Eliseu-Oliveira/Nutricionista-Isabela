// Configurações centrais de contato.
// Para alterar o número ou a mensagem padrão do WhatsApp, edite apenas aqui.

export const WHATSAPP_NUMBER = '553497797159' // formato: código do país + DDD + número, sem espaços ou símbolos

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá, Bella! 👋 Vi seu site e gostaria de saber mais sobre valores e disponibilidade para uma consulta. Pode me ajudar?'

export function getWhatsappLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const INSTAGRAM_URL = 'https://www.instagram.com/bellasalesnutri/'
