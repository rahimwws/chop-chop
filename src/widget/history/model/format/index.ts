import { Bill, Group } from "@/entities/groups/lib/types";

export function formatDate(date: Date): string {
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const suffix = getDaySuffix(day);

  return `${day}${suffix} ${hours}:${minutes}`;
}

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export const filterBillsByMonth = (
  groups: Group[],
  selectedMonth: number
): (Bill & { groupName: string; groupId: string })[] => {
  return groups.flatMap((group) =>
    group.bills
      .filter((bill) => new Date(bill.date).getMonth() === selectedMonth)
      .map((bill) => ({ ...bill, groupName: group.name, groupId: group.id }))
  );
};
