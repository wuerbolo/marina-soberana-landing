/**
 * Links that leave escuelasoberana.com.
 *
 * The WhatsApp deep link is built here and rendered in exactly one place: the
 * qualifier screen shown to a visitor who cleared all three gates
 * (docs/adr/0002). Anywhere else it would collect the information requests the
 * six questions exist to sort — so this module keeps the single caller it has.
 */

// Marina's business number, from the concept she supplied.
const WHATSAPP_NUMBER = "34664070214";

/**
 * Prefilled so she arrives already introduced: Marina can look her answers up
 * by name before replying, and she never has to explain herself twice.
 */
export function whatsappLink(fullName: string): string {
  const text = `Hola Marina, soy ${fullName.trim()}. Acabo de completar el cuestionario de Soberana.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Tus Guías Te Hablan still lives on the legacy WordPress site. When it moves
// onto the platform (Trello cjDmYDVx) only this constant changes.
export const TUS_GUIAS_URL = "https://marinaromes.com/tus-guias-te-hablan/";
