import { Stack } from "@mui/material";
import Sidebar from "../sidebar/sidebar";
import { ReactNode } from "react";

const AppLayout = ({children}:{children: ReactNode}) => {
  return (
    <Stack flexDirection={"row"}>
      <Sidebar />
      {children}
    </Stack>
  );
};

export default AppLayout;
