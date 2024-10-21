import { useState, useCallback } from "react";

export const useUpdatePrice = () => {
  const [participantsPrices, setParticipantsPrices] = useState<{
    [key: string]: number;
  }>({});

  const updatePrice = useCallback((address: string, price: number) => {
    setParticipantsPrices((prev) => ({
      ...prev,
      [address]: price,
    }));
  }, []);

  return { participantsPrices, updatePrice };
};
