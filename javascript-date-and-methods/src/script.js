export function getFullDaysBeforeNewYear(date, month) {
  
    if (
    typeof date !== "number" || 
    typeof month !== "number" || 
    date <= 0 || 
    month <= 0 || 
    date !== Math.floor(date) || // Ensure date is an integer
    month !== Math.floor(month) || // Ensure month is an integer
    date === Infinity || 
    date === -Infinity || 
    month === Infinity || 
    month === -Infinity ||
    isNaN(date) || 
    isNaN(month)
  ) {
    return null;
  }

  const currentDate = new Date(new Date().getFullYear(), month - 1, date);

  const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);

  const diffInMilliseconds = newYearDate - currentDate;

  const fullDaysBeforeNewYear = Math.ceil(diffInMilliseconds / (24 * 60 * 60 * 1000));

  return fullDaysBeforeNewYear;
}

export function formatWithWeekday(date) {
    if (!date || !(date instanceof Date)) {
        return '';
    }

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const weekdayName = weekdays[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    return `${weekdayName}, ${day}, ${monthName} ${year}`;
}

export function isValidDate(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return false;
  }

  return true;
}

export function isAfter(date, dateToCompare) {
  const isValid = (d) => d instanceof Date && !isNaN(d.getTime());

  if (!isValid(date) || !isValid(dateToCompare)) {
    return false;
  }

  return date.getTime() > dateToCompare.getTime();
} 

export function formatDistanceToNow(date) {

  if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
    return "Date is unknown";
  }

  const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

  const now = new Date();
  const differenceInSeconds = (now.getTime() - date.getTime()) / 1000;

  if (differenceInSeconds < 30) {
    return "less than a minute";
  } else if (differenceInSeconds < 90) {
    return "1 minute";
  } else if (differenceInSeconds < 2670) { // 2670 seconds = 44 minutes 30 seconds
    const minutes = Math.round(differenceInSeconds / 60);
    return `${minutes} minutes`;
  } else if (differenceInSeconds < 5370) { // 5370 seconds = 89 minutes 30 seconds
    return "about 1 hour";
  }

  const day = addLeadingZero(date.getDate());
  const month = addLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}
