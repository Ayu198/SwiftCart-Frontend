import { createTheme } from "@mui/material/styles";

const customeTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#4F46E5",
      dark: "#4338CA",
      light: "#818CF8",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#64748B",
      contrastText: "#FFFFFF",
    },

    background: {
      default: "#FFFFFF",
      paper: "#F8FAFC",
    },

    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },

    divider: "#E2E8F0",

    success: {
      main: "#22C55E",
    },

    warning: {
      main: "#F59E0B",
    },

    error: {
      main: "#EF4444",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 600,
    },

    h4: {
      fontWeight: 600,
    },

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 20px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 2px 10px rgba(15, 23, 42, 0.08)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#0F172A",
          boxShadow: "none",
          borderBottom: "1px solid #E2E8F0",
        },
      },
    },
  },
});

export default customeTheme; 