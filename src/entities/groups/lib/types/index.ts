export interface Bill {
  sum: number;
  payerAddress: string;
  spenersAddresses: string[];
  spentAmounts: number[];
  name: string;
  date: number;
  currency: string;
}

export interface Group {
  id: string;
  name: string;
  image: string;
  participants: string[];
  bills: Bill[];
}

export interface Debt {
  from: string;
  to: string;
  debt: number;
}

export interface UserGroupsStore {
  groups: Group[];
  setGroups: (groups: Group[]) => void;
}
