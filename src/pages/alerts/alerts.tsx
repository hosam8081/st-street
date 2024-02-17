import { Box } from "@mui/material";
import AppLayout from "../../components/layout/appLayout";
import Navbar from "../../components/navbar/navbar";
import ControlledAccordions from "../../components/atoms/accordion/controlAccordion";
import { alertsData } from "../../data/alertsData";
import { sidebarWidth } from "../../components/sidebar/sidebar";
import AlertsFilter from "../../components/alertsFilter/alertsFilter";

const Alerts = () => {
  return (
    <>
      <AppLayout>
        <Box
          sx={{
            flex: 2,
            padding: "19px 24px 0",
            maxWidth: `calc(100% - ${sidebarWidth})`,
          }}
        >
          <Navbar />
          <Box sx={{ mt: "39px" }}>
            <ControlledAccordions data={alertsData} />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", lg: "block" },
            padding: "19px 24px 0",
          }}
        >
          <AlertsFilter />
        </Box>
      </AppLayout>
    </>
  );
};

export default Alerts;
