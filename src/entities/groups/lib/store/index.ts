import { storage } from "@/shared/lib/storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Bill, Debt, UserSelectionsStore, Group } from "../types";

export function billToDebts(bill: Bill) {
  const debts = bill.spentAmounts.map((x, i) => ({
    from: bill.spenersAddresses[i],
    to: bill.payerAddress,
    debt: bill.spentAmounts[i],
  })) as Debt[];

  return debts;
}

export function calcOweIsOwed(debts: Debt[], userAddress: string) {
  const userOwe = debts
    .filter((x) => x.to == userAddress)
    .map((x) => x.debt)
    .reduce((x, y) => x + y, 0);
  const userIsOwed = debts
    .filter((x) => x.from == userAddress)
    .map((x) => x.debt)
    .reduce((x, y) => x + y, 0);

  return { userOwe, userIsOwed };
}
export const useGroupsStore = create<
  UserSelectionsStore,
  [["zustand/persist", never]]
>(
  persist(
    (set, get) => ({
      groups: [],
      setGroups(groups: Group[]) {
        set({
          groups,
        });
      },
    }),
    {
      name: "selectionsStore",
      storage: createJSONStorage(() => storage),
    }
  )
);
