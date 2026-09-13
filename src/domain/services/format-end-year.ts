export function formatEndYear(
  endYear: string | undefined,
  presentLabel: string,
): string {
  if (endYear === undefined || endYear.trim() === '') {
    return ''
  }

  if (/^\d+$/.test(endYear)) {
    return endYear
  }

  return presentLabel
}
