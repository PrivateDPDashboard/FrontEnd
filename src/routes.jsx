import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import AddCustomer from "./pages/Customers/AddCustomer";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <PlusCircleIcon {...icon} />,
        name: "Add Customer",
        path: "/Add-Customer",
        element: <AddCustomer />,
      },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "profile",
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Customers",
        path: "/Customers",
        element: <Tables />,
      },
      // {
      //   icon: <InformationCircleIcon {...icon} />,
      //   name: "notifications",
      //   path: "/notifications",
      //   element: <Notifications />,
      // },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
