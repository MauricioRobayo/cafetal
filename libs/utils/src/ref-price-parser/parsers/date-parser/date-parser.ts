const monthsMapper: { [k: string]: string } = {
  enero: "01",
  febrero: "02",
  marzo: "03",
  abril: "04",
  mayo: "05",
  junio: "06",
  julio: "07",
  agosto: "08",
  septiembre: "09",
  octubre: "10",
  noviembre: "11",
  diciembre: "12",
};

export function dateParser(content: string): string {
  const monthNames = Object.keys(monthsMapper);
  const regExp = new RegExp(
    `(${monthNames.join("|")}) (\\d{1,2})\\s?\\/\\s?(\\d{4})`,
    "i"
  );
  const match = content.match(regExp);

  if (!match) {
    throw new Error(`dateParser: Could not parse date from '${content}'`);
  }

  const month = monthsMapper[match[1].toLocaleLowerCase()];

  const date = match[2].padStart(2, "0");
  const year = match[3];

  const str = `${year}-${month}-${date}`;

  try {
    return new Date(`${str}T05:00:00.000Z`).toISOString();
  } catch (err) {
    throw new Error(`dateParser: Invalid time value '${str}'`);
  }
}
