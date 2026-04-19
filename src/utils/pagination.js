/** Page numbers to show with ellipsis (1 … 4 5 6 … 20). */
export function buildPageList(current, total) {
  if (total <= 9) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const set = new Set([1, total, current, current - 1, current + 1]);
  for (let d = -2; d <= 2; d += 1) {
    set.add(current + d);
  }
  return [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
}
