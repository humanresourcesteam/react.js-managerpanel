import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const menuItems = [
  {
    id: 1,
    title: "MAIN",
    subMenu: [
      {
        id: 1,
        label: "Dashboard",
        path: "/",
        icon: DashboardOutlinedIcon,
      },
    ],
  },
  {
    id: 2,
    title: "EMPLOYEE",
    subMenu: [
      {
        id: 1,
        label: "Employee List",
        path: "/employee",
        icon: EngineeringOutlinedIcon,
      },
      {
        id: 2,
        label: "Employee Add",
        path: "/employee/add",
        icon: PersonAddOutlinedIcon,
      },
    ],
  },
  {
    id: 3,
    title: "LIST",
    subMenu: [
      {
        id: 1,
        label: "Advance List",
        path: "/advance",
        icon: FormatListNumberedIcon,
      },
      {
        id: 2,
        label: "Expense List",
        path: "/expence",
        icon: FormatListBulletedOutlinedIcon,
      },
      {
        id: 3,
        label: "Authorization List",
        path: "/permi",
        icon: FactCheckOutlinedIcon,
      },
    ],
  },
  {
    id: 4,
    title: "USEFUL",
    subMenu: [
      {
        id: 1,
        label: "Stats",
        path: "/stats",
        icon: InsertChartOutlinedSharpIcon,
      },
      {
        id: 2,
        label: "Notification",
        path: "/notification",
        icon: NotificationsNoneIcon,
      },
    ],
  },
  {
    id: 5,
    title: "SERVICE",
    subMenu: [
      {
        id: 1,
        label: "System Health",
        path: "/systemhealth",
        icon: SettingsSystemDaydreamOutlinedIcon,
      },
      {
        id: 2,
        label: "Logs",
        path: "/logs",
        icon: PsychologyOutlinedIcon,
      },
      {
        id: 3,
        label: "Settings",
        path: "/settings",
        icon: SettingsOutlinedIcon,
      },
    ],
  },
];
