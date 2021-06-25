export function toFormattedDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDay();
  const month = date.toLocaleString('default', { month: 'short' });
  return [day, month];
}
