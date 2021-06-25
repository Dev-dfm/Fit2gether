export function toFormattedDate(dateString: string): (string | number)[] {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  return [day, month];
}
