export function getCurrentTimeInToronto(): Date {
  const now = new Date();

  const offsetToronto = -4;
  now.setHours(now.getUTCHours() + offsetToronto);

  return now;
}

export function formatTimeForToronto(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/Toronto",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  formattedTime += " ET";
  return formattedTime;
}
