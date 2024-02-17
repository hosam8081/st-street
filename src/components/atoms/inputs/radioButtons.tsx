import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import { ReactNode } from "react";

export default function RadioButtons({children}: {children: ReactNode}) {
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
}
