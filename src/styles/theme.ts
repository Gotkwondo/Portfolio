import { createTheme } from '@mui/material/styles';
import { blue } from "@mui/material/colors";

export const buttonTheme = createTheme({
  palette: {
    primary: {
      main: blue[300], // indigo
      contrastText: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 12,
          "&:hover": {
            backgroundColor: "#4f46e5", // darker indigo on hover
          },
        },
      },
    },
  },
});