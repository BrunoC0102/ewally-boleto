const baseDate: any = new Date("1997-10-07");

export const calculate = {
  days (date: string) {
    const otherDate: any = new Date(date);
  
    const diffDateInMs = otherDate - baseDate;
    const diffDateInDays = Math.round((diffDateInMs / (1000 * 60 * 60 * 24)));
  
    return diffDateInDays;
  },
  date (days: number) {
    const diffDateInMs = days * (1000 * 60 * 60 * 24);
    const newMillisecondsDate = new Date(baseDate).setMilliseconds(diffDateInMs);
    const newDate = new Date(newMillisecondsDate); 
    return newDate.toISOString().split("T")[0];
  },
}