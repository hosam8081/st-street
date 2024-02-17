import { Box, Radio, Stack, Typography, styled } from "@mui/material";
import { MainColors } from "../../style/theme";
import AppliedFilter from "./appliedFilter";
import MainButton from "../atoms/buttons/mainButton";
import SearchField from "../atoms/inputs/searchField";
import RadioButtons from "../atoms/inputs/radioButtons";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SVGCheckedRadio, SVGUnCheckedRadio } from "../atoms/inputs/svg";
import FilterAccordion from "../atoms/accordion/filterAccordion";

const CardApplied = styled(Box)({
  background: MainColors.card[100],
  padding: "7px",
  paddingBottom: "24px",
  borderRadius: "6.86px",
  marginTop: "4px",
});

const CardStack = styled(Box)({
  background: MainColors.card[100],
  padding: "8px 16px",
  paddingBottom: "16px",
  borderRadius: "6.86px",
  marginTop: "14px",
});

const AlertsFilter = () => {
  return (
    <Box sx={{ background: MainColors.darkBlue, padding: "25px 25px" }}>
      <Typography
        variant="lead_text"
        component={"p"}
        sx={{ textAlign: "center", pb: "7px" }}
      >
        filters
      </Typography>

      <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        <Typography variant="lead_muted">Filters Applied</Typography>
        <Typography variant="lead_muted" color={MainColors.textColor}>
          Clear All
        </Typography>
      </Stack>

      <CardApplied>
        <AppliedFilter text={"Real estate"} />
      </CardApplied>

      <CardStack>
        <Typography variant="lead_header">Stock</Typography>
        <SearchField placeholder="$ TICKER" padding="0" />

        <Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", mt: "24px" }}>
          <FilterAccordion RadioHeading="Market Cap">
            <RadioButtons>
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    checkedIcon={SVGCheckedRadio}
                    icon={SVGUnCheckedRadio}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    checkedIcon={SVGCheckedRadio}
                    icon={SVGUnCheckedRadio}
                  />
                }
                label="male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    checkedIcon={SVGCheckedRadio}
                    icon={SVGUnCheckedRadio}
                  />
                }
                label="other"
              />
            </RadioButtons>
          </FilterAccordion>

          <FilterAccordion RadioHeading="Market Cap">
            <RadioButtons>
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    checkedIcon={SVGCheckedRadio}
                    icon={SVGUnCheckedRadio}
                  />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    checkedIcon={SVGCheckedRadio}
                    icon={SVGUnCheckedRadio}
                  />
                }
                label="male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio
                    checkedIcon={SVGCheckedRadio}
                    icon={SVGUnCheckedRadio}
                  />
                }
                label="other"
              />
            </RadioButtons>
          </FilterAccordion>
        </Box>
      </CardStack>

      <Box sx={{ textAlign: "center", mt: "18px" }}>
        <MainButton variant="contained">Apply</MainButton>
      </Box>
    </Box>
  );
};

export default AlertsFilter;
