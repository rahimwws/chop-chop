export function getFormattedDate(timestamp: number = Date.now()) {
  const date = new Date(timestamp);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];

  function getDayWithSuffix(day: number) {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }

  const formattedDay = getDayWithSuffix(day);

  const today = new Date();
  if (date.toDateString() === today.toDateString()) {
    return `Today ${formattedDay} ${month}`;
  } else {
    return `${formattedDay} ${month}`;
  }
}
