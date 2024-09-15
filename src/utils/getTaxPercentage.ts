export default function getTaxPercentage(dateString: Date) {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  // Calculate the difference in time (in milliseconds)
  const timeDifference = currentDate.getTime() - inputDate.getTime();

  // Convert time difference from milliseconds to days and then to years
  const differenceInYears = timeDifference / (1000 * 3600 * 24 * 365);

  // Determine the tax percentage
  if (differenceInYears < 1) {
    return 7.5;
  } else {
    return 5;
  }
}
