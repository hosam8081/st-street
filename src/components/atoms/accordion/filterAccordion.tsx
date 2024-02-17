import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MainColors } from "../../../style/theme";

interface FilterAccordion {
  children: React.ReactNode;
  RadioHeading: string;
}

export default function FilterAccordion({ children, RadioHeading }: FilterAccordion) {
  const [expanded, setExpanded] = React.useState<string | boolean>("panel1");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          background: "transparent",
          boxShadow: "none",
          ".MuiAccordion-root.Mui-expanded": {
            background: MainColors.primary[600],
          },
          ".MuiAccordionSummary-expandIconWrapper": { display: "none" },
          ".MuiAccordionSummary-root": {
            background: "transparent",
            color: MainColors.textColor,
            minHeight: "10px",
            height: "25px",
          },
          ".MuiFormControlLabel-label": {
            color: "#fff",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>{RadioHeading}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
