import { useMemo } from "react";

export const useGroupSum = (participantsPrices: { [key: string]: number }) => {
  const sumGroup = useMemo(
    () =>
      Object.values(participantsPrices).reduce(
        (total, price) => total + price,
        0
      ),
    [participantsPrices]
  );

  return sumGroup;
};
