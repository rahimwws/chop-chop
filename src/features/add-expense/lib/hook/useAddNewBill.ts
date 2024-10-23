import { Bill, Group } from "@/entities/groups/lib/types";
import { useCallback } from "react";
export const useAddNewBill = (
  groups: Group[],
  setGroups: (groups: Group[]) => void
) => {
  const addNewBill = useCallback(
    (
      groupId: string,
      description: string,
      sumGroup: number,
      paidBy: string,
      participantsPrices: { [address: string]: number },
      date: number,
      currency: string
    ) => {
      const newBill: Bill = {
        sum: sumGroup,
        payerAddress: paidBy,
        spenersAddresses: Object.keys(participantsPrices),
        spentAmounts: Object.values(participantsPrices),
        name: description,
        date: date,
        currency,
      };

      const updatedGroups = groups.map((g) => {
        if (g.id === groupId) {
          return {
            ...g,
            bills: [...g.bills, newBill],
          };
        }
        return g;
      });

      setGroups(updatedGroups);
    },
    [groups, setGroups]
  );

  return { addNewBill };
};
