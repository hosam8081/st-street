import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Divider, Stack, SxProps } from "@mui/material";
import { MainColors } from "../../../style/theme";

import iconPrice from "../../../assets/alerts/vector.png";
import iconName from "../../../assets/alerts/vector-name.png";
import iconRisk from "../../../assets/alerts/vector-risk.png";
import iconRise from "../../../assets/alerts/rise.png";

interface DataProps {
  alerts_name: string;
  alerts_price: string;
  alerts_rise: string;
  alerts_risk: string;
  alerts_desc: string;
}

interface ControlledAccordionsProps {
  sx?: SxProps;
  data: DataProps[];
}

export default function ControlledAccordions({
  sx,
  data,
}: ControlledAccordionsProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    _: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{display:"flex", flexDirection:"column", gap:"16px"}}>
      {data?.map((row: DataProps, index: number) => {
        const panel = `panel${index}`;
        return (
          <Accordion
            key={index}
            expanded={expanded === panel}
            onChange={handleChange(panel)}
            sx={{
              borderRadius: "8px",
              background:MainColors.secondary,
              ".MuiAccordion-root.Mui-expanded": {
                background: MainColors.primary[600]
              },
              ".MuiAccordionSummary-expandIconWrapper": { display: "none" },
              ".MuiAccordionSummary-root": {
                background: MainColors.secondary,
                color: MainColors.textColor,
                borderRadius: "8px",
              },
              ".MuiAccordionSummary-root.Mui-expanded": {
                background: MainColors.primary[600],
              },
              ".MuiAccordionSummary-root.Mui-expanded hr": {
                background: MainColors.textColor,
              },
              ".MuiAccordionDetails-root": {
                background: MainColors.darkBlue,
                color: MainColors.textColor,
              },
              ".MuiAccordionSummary-content": {
                overflowX: "auto",
                overflowY: "hidden"
              },
              "& *": {
                scrollbarWidth: "thin",
                scrollbarColor: MainColors.darkBlue,
              },
              "& *:hover": {
                scrollbarColor: MainColors.darkBlue,
              },
              ...sx,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Stack
                direction="row"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={MainColors.divider}
                  />
                }
                sx={{ width: "100%" }}
                spacing={2}
              >
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 30px",
                    gap: "30px",
                  }}
                >
                  <img src={iconName} alt="name" />
                  <Typography component={"span"} sx={{ lineHeight: "1.3" }}>
                    {row.alerts_name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 30px",
                    gap: "30px",
                  }}
                >
                  <img src={iconPrice} alt="document" />
                  <Typography component={"span"} sx={{ lineHeight: "1.3" }}>
                    {row.alerts_price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 30px",
                    gap: "30px",
                  }}
                >
                  <img src={iconRise} alt="rise" />
                  <Typography component={"span"} sx={{ lineHeight: "1.3" }}>
                    {row.alerts_rise}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: "1",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 30px",
                    gap: "30px",
                  }}
                >
                  <img src={iconRisk} alt="risk" />
                  <Typography component={"span"} sx={{ lineHeight: "1.3" }}>
                    {row.alerts_risk}
                  </Typography>
                </Box>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{row.alerts_desc}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}