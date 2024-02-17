import { createTheme, ThemeOptions } from "@mui/material/styles";

export const MainColors = {
  primary: {
    25: "rgba(252, 250, 255, 1)",
    50: "rgba(249, 245, 255, 1)",
    100: "rgba(244, 235, 255, 1)",
    200: "rgba(233, 215, 254, 1)",
    300: "rgba(214, 187, 251, 1)",
    400: "rgba(182, 146, 246, 1)",
    500: "rgba(158, 119, 237, 1)",
    600: "#53ACFF",
    700: "rgba(105, 65, 198, 1)",
    800: "rgba(83, 56, 158, 1)",
    900: "rgba(66, 48, 125, 1)",
  },
  secondary: "#313131",
  darkBlue: "#181818",
  divider: "#414040",
  sidebar: {
    sidebarBg: "#181818",
    contrastText: "#909090",
    activeText: "#fff",
  },
  card: {
    100: "#202020",
  },
  textColor: "#fff",
};

declare module "@mui/material/styles" {
  interface TypographyVariants {
    lead_header: React.CSSProperties;
    lead_text: React.CSSProperties;
    lead_muted: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    lead_header?: React.CSSProperties;
    lead_text: React.CSSProperties;
    lead_muted: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    lead_header: true;
    lead_text: true;
    lead_muted: true;
  }
}

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: MainColors.primary[600],
      light: MainColors.primary[600],
      dark: MainColors.primary[600],
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontWeight: "700",
      fontSize: "48px",
      color: MainColors.textColor,
    },
    lead_header: {
      fontSize: "15px",
      fontWeight: "700",
      color: MainColors.textColor,
      lineHeight: "32px"
    },

    lead_text: {
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: "600",
      color: MainColors.textColor,
    },

    lead_muted: {
      color: "#979797",
      fontWeight: 500,
      fontSize: "14px",
    }
  },
});
