import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "This year's benefits",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last year",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Total Users",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last year",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than last quarter",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last quarter",
    },
  },
];

export default statisticsCardsData;
