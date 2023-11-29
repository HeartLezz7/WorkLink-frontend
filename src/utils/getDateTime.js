export default function getDateTime(dateTimeStr) {
  const utcDate = new Date(dateTimeStr);

  if (!isNaN(utcDate)) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const formattedDate = utcDate.toLocaleDateString("en-US", options);

    return formattedDate;
  } else {
    return "Invalid Date";
  }
}
