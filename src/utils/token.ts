/**
 * Gera um UUID (v4 - versão universalmente única).
 * * Isso utiliza a API criptograficamente segura nativa (crypto.randomUUID),
 * garantindo que os IDs gerados sejam de alta qualidade e não colidam.
 * * Exemplo: 'a1b2c3d4-e5f6-4a7b-8c9d-e0f1a2b3c4d5'
 * * @returns {string} O UUID (v4) gerado.
 */
export function generateUUID(): string {
  return crypto.randomUUID();
}
