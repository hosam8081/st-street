import {Stack, Typography } from "@mui/material"
import SearchField from "../atoms/inputs/searchField"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MainColors } from "../../style/theme";

const Navbar = () => {
  return (

    <Stack flexDirection={'row'} gap="28px" alignItems={'center'}>
      <Typography variant="h1" component='h1'>Alerts</Typography>
      <SearchField placeholder="Search By" 
          padding="0px 0 0 17px"
      />
      <NotificationsIcon sx={{color:MainColors.primary[600]}}/>
    </Stack>
  )
}

export default Navbar