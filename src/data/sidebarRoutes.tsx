import AddAlertIcon from '@mui/icons-material/AddAlert';
import SchoolIcon from '@mui/icons-material/School';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
export const sidebarRoutes = [
  {
    icon: <AddAlertIcon />,
    name: "Alerts",
    route: "/"
  },
  {
    icon: <SchoolIcon />,
    name: "training",
    route: "/"
  },
  {
    icon: <SettingsSuggestIcon />,
    name: "Automation",
    route: "/"
  },
  {
    icon: <FolderCopyIcon />,
    name: "Portfolio",
    route: "/"
  },
  {
    icon: <SignalCellularAltOutlinedIcon />,
    name: "Trading",
    route: "/"
  }
]