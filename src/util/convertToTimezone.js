import dayjs from "dayjs";

export const convertToTimezone = (timestamp, timezone) =>
  dayjs(timestamp * 1000) // convert to milliseconds
    .utcOffset(timezone / 60); // convert to minutes
