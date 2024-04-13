export function formattedDate(date: Date): string {
  return date.toISOString().split('T')[0]
}