export function getDatetime(date: string, time: string) {
  const datetime = new Date();
  const d = new Date(date);
  const t = new Date(time);
  datetime.setUTCFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  datetime.setUTCHours(t.getUTCHours(), t.getUTCMinutes(), 0, 0);
  console.log(datetime);
  return datetime;
}
