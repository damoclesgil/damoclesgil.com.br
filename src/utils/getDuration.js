import { parseISO, intervalToDuration } from "date-fns";

export const getDuration = (startDate, endDate) => {
  const durationObj = intervalToDuration({
    start: parseISO(startDate),
    end: endDate ? parseISO(endDate) : new Date(),
  });

  let durationStr = "";

  if (durationObj && durationObj.years > 1) {
    durationStr = `${durationObj.years} yrs `;
  } else if (durationObj.years === 1) {
    durationStr = `${durationObj.years} yr `;
  }

  durationStr += `${durationObj.months} mos`;

  return durationStr;
};
