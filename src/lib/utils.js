import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const isSameDay = (date1, date2) => {
  if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  ) {
    return true;
  } else {
    return false;
  }
};

export const formatDate = (date) => {
  const dateStr = new Date(date).toDateString();
  const timeStr = new Date(date).toLocaleTimeString("en-US", {
    hour12: true,
  });
  return `${dateStr} - ${timeStr}`;
};

export function convertTo24HourFormat(time) {
  const date = new Date(time);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}

export const GetLastPingTime = (pings) => {
  if (pings.logs.length === 0) return "No pings yet";
  const lastPingTime = new Date(
    pings.logs[pings.logs.length - 1].time
  ).getTime();
  const timeNow = new Date().getTime();

  const timeDifference = timeNow - lastPingTime;

  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

  if (minutesAgo < 1) return "Just now";
  if (minutesAgo < 60) return `${minutesAgo}m ago`;
  if (hoursAgo < 24) return `${hoursAgo}h ago`;
  return `${Math.floor(hoursAgo / 24)}d ago`;
};
