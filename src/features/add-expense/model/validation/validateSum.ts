export const validateSum = (sum: string, sumGroup: number) => {
  const totalSum = parseFloat(sum);
  if (isNaN(totalSum)) {
    return { success: false, message: "Please enter a valid sum." };
  }

  if (totalSum === sumGroup) {
    return {
      success: true,
      message: "The total matches the sum of all participants!",
    };
  } else {
    return {
      success: false,
      message: `Total sum of participants is ${sumGroup}, but the bill sum is ${totalSum}`,
    };
  }
};
