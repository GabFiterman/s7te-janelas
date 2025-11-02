/**
 * Normaliza uma string para uso em Paths ou Aliases (SSOT Keys).
 * * 1. Remove acentos.
 * 2. Substitui espaços e hífens por underscore (_).
 * 3. Converte para MAIÚSCULO.
 *
 * @param str A string de entrada (Ex: 'Meus Projetos-1').
 * @returns A string normalizada (Ex: 'MEUS_PROJETOS_1').
 */
export function normalizeStringForPath(str: string): string {
  if (!str) return '';

  const withoutAccents = str.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
  const upperCaseStr = withoutAccents.toUpperCase();
  const normalized = upperCaseStr.replace(/[- ]/g, '_');

  return normalized;
}
