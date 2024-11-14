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
