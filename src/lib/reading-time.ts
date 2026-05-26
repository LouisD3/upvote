/** Estime le temps de lecture (minutes) à partir d'un texte brut, ~200 mots/min. */
export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
