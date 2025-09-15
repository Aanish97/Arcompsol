import { colors } from "@/styles/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    black: string;
    gray: string;
    dimGray: string;
    blueWhale: string;
    mortar: string;
    deepSkyBlue: string;
    heather: string;
    suvaGreyPointEight: string;
    prussianBlue: string;
    dimWhite: string;
    // New enhanced colors
    primaryGradient: string;
    primaryBlue: string;
    primaryDark: string;
    primaryNavy: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textMuted: string;
    borderLight: string;
    borderMedium: string;
  }

  interface Theme {
    customSpacing: {
      space1: number;
      space2: number;
      space3: number;
      space4: number;
      space5: number;
      space6: number;
      space8: number;
      space10: number;
      space12: number;
      space16: number;
      space20: number;
      space24: number;
      sectionSpacing: number;
      componentSpacing: number;
      elementSpacing: number;
      microSpacing: number;
    };
  }

  interface ThemeOptions {
    customSpacing?: {
      space1?: number;
      space2?: number;
      space3?: number;
      space4?: number;
      space5?: number;
      space6?: number;
      space8?: number;
      space10?: number;
      space12?: number;
      space16?: number;
      space20?: number;
      space24?: number;
      sectionSpacing?: number;
      componentSpacing?: number;
      elementSpacing?: number;
      microSpacing?: number;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

export const theme = createTheme({
  palette: {
    common: {
      black: colors.black,
      gray: colors.gray,
      dimGray: colors.dimGray,
      blueWhale: colors.blueWhale,
      mortar: colors.mortar,
      deepSkyBlue: colors.deepSkyBlue,
      heather: colors.heather,
      suvaGreyPointEight: colors.suvaGreyPointEight,
      prussianBlue: colors.prussianBlue,
      dimWhite: colors.dimWhite,
      // New enhanced colors
      primaryGradient: colors.primaryGradient,
      primaryBlue: colors.primaryBlue,
      primaryDark: colors.primaryDark,
      primaryNavy: colors.primaryNavy,
      neutral50: colors.neutral50,
      neutral100: colors.neutral100,
      neutral200: colors.neutral200,
      neutral300: colors.neutral300,
      neutral400: colors.neutral400,
      neutral500: colors.neutral500,
      neutral600: colors.neutral600,
      neutral700: colors.neutral700,
      neutral800: colors.neutral800,
      neutral900: colors.neutral900,
      success: colors.success,
      warning: colors.warning,
      error: colors.error,
      info: colors.info,
      backgroundPrimary: colors.backgroundPrimary,
      backgroundSecondary: colors.backgroundSecondary,
      textPrimary: colors.textPrimary,
      textSecondary: colors.textSecondary,
      textTertiary: colors.textTertiary,
      textMuted: colors.textMuted,
      borderLight: colors.borderLight,
      borderMedium: colors.borderMedium,
    },
  },
  typography: {
    fontFamily: ["Poppins", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"].join(","),
    h1: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: 1.2,
      marginBottom: "24px",
      color: colors.primaryDark,
      "@media (max-width:768px)": {
        fontSize: "32px",
      },
    },
    h2: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: 1.3,
      marginBottom: "16px",
      color: colors.primaryDark,
      "@media (max-width:768px)": {
        fontSize: "28px",
      },
    },
    h3: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: "16px",
      color: colors.dimGray,
      "@media (max-width:768px)": {
        fontSize: "20px",
      },
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.6,
      marginBottom: "16px",
      color: colors.mortar,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
      color: colors.heather,
    },
  },
  customSpacing: {
    space1: 4,
    space2: 8,
    space3: 12,
    space4: 16,
    space5: 20,
    space6: 24,
    space8: 32,
    space10: 40,
    space12: 48,
    space16: 64,
    space20: 80,
    space24: 96,
    sectionSpacing: 96,
    componentSpacing: 48,
    elementSpacing: 24,
    microSpacing: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: ["Poppins", "sans-serif"].join(","),
          textTransform: "none",
          fontWeight: 500,
          letterSpacing: "0.01em",
          borderRadius: "8px",
          transition: "all 0.25s ease-in-out",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          "&:focus": {
            outline: "2px solid",
            outlineColor: colors.primaryBlue,
            outlineOffset: "2px",
          },
        },
        sizeSmall: {
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: 500,
        },
        sizeMedium: {
          padding: "12px 24px",
          fontSize: "16px",
          fontWeight: 500,
        },
        sizeLarge: {
          padding: "16px 32px",
          fontSize: "18px",
          fontWeight: 600,
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            background: colors.primaryGradient,
            color: "#ffffff",
            border: "none",
            boxShadow: "0 2px 4px rgba(30, 64, 175, 0.2)",
            fontWeight: 600,
            "&:hover": {
              background: colors.primaryDark,
              transform: "translateY(-1px)",
              boxShadow: "0 4px 12px rgba(30, 64, 175, 0.3)",
            },
            "&:active": {
              transform: "translateY(0)",
              boxShadow: "0 2px 4px rgba(30, 64, 175, 0.2)",
            },
            "&:disabled": {
              background: colors.neutral300,
              color: colors.neutral500,
              transform: "none",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            background: "transparent",
            border: `1px solid ${colors.primaryBlue}`,
            color: colors.primaryBlue,
            fontWeight: 500,
            "&:hover": {
              backgroundColor: colors.primaryBlue,
              color: "#ffffff",
              transform: "translateY(-1px)",
              boxShadow: "0 4px 8px rgba(30, 64, 175, 0.2)",
            },
            "&:active": {
              transform: "translateY(0)",
              boxShadow: "0 2px 4px rgba(30, 64, 175, 0.1)",
            },
            "&:disabled": {
              borderColor: colors.neutral300,
              color: colors.neutral400,
              transform: "none",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            background: "transparent",
            border: `1px solid ${colors.borderMedium}`,
            color: colors.textSecondary,
            fontWeight: 500,
            "&:hover": {
              borderColor: colors.neutral400,
              backgroundColor: colors.neutral50,
              color: colors.textPrimary,
              transform: "translateY(-1px)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
            },
            "&:active": {
              transform: "translateY(0)",
              backgroundColor: colors.neutral100,
            },
            "&:disabled": {
              borderColor: colors.neutral200,
              color: colors.neutral400,
              transform: "none",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            background: "transparent",
            border: "none",
            color: colors.primaryBlue,
            padding: "8px 16px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: colors.neutral50,
              color: colors.primaryDark,
            },
            "&:active": {
              backgroundColor: colors.neutral100,
            },
            "&:disabled": {
              color: colors.neutral400,
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
  },
});
