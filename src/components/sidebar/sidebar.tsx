import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  // ListItemText,
} from "@mui/material";
import { MainColors } from "../../style/theme";
import logo from "../../assets/logo.png";
import userImg from "../../assets/user.png";
import { NavLink } from "react-router-dom";
import { sidebarRoutes } from "../../data/sidebarRoutes";

export const sidebarWidth:string = "70px";

const Sidebar = () => {
  const side = (
    <List>
      {sidebarRoutes?.map((route) => {
        return (
          <ListItem disablePadding sx={{"& .MuiButtonBase-root":{
            justifyContent: "center !important"
          }}}>
            <NavLink to={"/"} style={{ textDecoration: "none", width: "100%" }}>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: MainColors.sidebar.activeText,
                    },
                    "&.MuiListItemIcon-root": {
                      color: MainColors.sidebar.activeText,
                      minWidth:"auto !important"
                    },
                  }}
                >
                  {route.icon}
                </ListItemIcon>
                {/* <ListItemText
                primary={"route.text"}
                sx={{
                  color: "#fff",
                }}
              /> */}
              </ListItemButton>
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
  return (
    <Box sx={{ flexBasis: sidebarWidth, maxWidth: {sidebarWidth} }}>
      <Box
        sx={{
          background: MainColors.sidebar.sidebarBg,
          color: MainColors.sidebar.activeText,
          height: "100%",
          position: "fixed",
          width: sidebarWidth,
          textAlign: "center",
        }}
      >
        <Box sx={{mt:"29px", mb:"46px"}}>
          <img src={logo} alt="st suite logo" style={{ width: "60px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "space-between",
            height: "calc(100% - 124px)",
          }}
        >
          <Box>{side}</Box>
          <Box>
            <img src={userImg} alt="username" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
