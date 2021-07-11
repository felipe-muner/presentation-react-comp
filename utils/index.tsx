export const getShortName = (fullName: string) => {
  return fullName[0] + fullName[1];
};

export const randomDate = (start: Date, end: Date) =>
  // randomDate(new Date(2012, 0, 1), new Date());
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
