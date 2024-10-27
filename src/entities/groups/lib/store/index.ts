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

export function calcOweIsOwed(bills: Bill[], userAddress: string) {
  let oweIsOwed = {
    userOwe: 0,
    userIsOwed: 0,
  };
  for (const bill of bills) {
    const userOwe = calcUserOwe(bill, userAddress);
    if (userOwe > 0) oweIsOwed.userOwe += userOwe;
    else oweIsOwed.userIsOwed += -userOwe;
  }
  return oweIsOwed;
}

export function calcUserOwe(bill: Bill, userAddress: string) {
  const debts = billToDebts(bill);
  const userOwe = debts
    .filter((x) => x.from == userAddress)
    .map((x) => x.debt)
    .reduce((x, y) => x + y, 0);
  const userIsOwed = debts
    .filter((x) => x.to == userAddress)
    .map((x) => x.debt)
    .reduce((x, y) => x + y, 0);

  return userOwe - userIsOwed;
}
export function calcContractOwe(
  bill: Bill,
  userAddress: string,
  contactAddress: string
) {
  const debts = billToDebts(bill);
  const userOwe = debts
    .filter((x) => x.from == userAddress && x.to == contactAddress)
    .map((x) => x.debt)
    .reduce((x, y) => x + y, 0);

  const userIsOwed = debts
    .filter((x) => x.to == userAddress && x.from == contactAddress)
    .map((x) => x.debt)
    .reduce((x, y) => x + y, 0);

  return userOwe - userIsOwed;
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
