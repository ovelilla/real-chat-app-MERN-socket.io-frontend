import { createTheme } from "@mui/material/styles";

const LightTheme = createTheme({
    palette: {
        mode: "light",
        divider: "#e2e8f0",
        text: {
            primary: "rgb(17, 24, 39)",
            secondary: "rgb(107, 114, 128)",
            disabled: "rgb(149, 156, 169)",
        },
        common: {
            black: "rgb(17, 24, 39)",
            white: "rgb(255, 255, 255)",
        },
        primary: {
            light: "#64748b",
            main: "#324475",
            dark: "#28365e",
            contrastText: "#ffffff",
        },
        secondary: {
            light: "#818cf8",
            main: "#4f46e5",
            dark: "#3730a3",
            contrastText: "#ffffff",
        },
        error: {
            light: "#ffcdd2",
            main: "#dc2626",
            dark: "#b71c1c",
            contrastText: "#ffffff",
        },
        background: {
            paper: "#ffffff",
            default: "#f1f5f9",
        },
        
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1280,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    flexShrink: 0,
                    fontSize: "inherit",
                    textTransform: "none",
                    borderRadius: "48px",
                    height: "48px",
                    padding: "0 24px",
                    fontWeight: "500",
                    boxShadow: "none",
                    "&:hover, &:focus": {
                        boxShadow: "none",
                    },
                },
                outlined: {
                    borderWidth: "2px",
                    "&:hover, &:focus": {
                        borderWidth: "2px",
                        backgroundColor: "transparent",
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                },
                input: {
                    padding: "16.5px 20px",
                },
                notchedOutline: {
                    padding: "0 12px",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    transform: "translate(20px, 16px) scale(1)",
                    "&.Mui-focused": {
                        transform: "translate(20px, -9px) scale(0.75)",
                    },
                },
                shrink: {
                    transform: "translate(20px, -9px) scale(0.75)",
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    flexShrink: 0,
                    width: "48px",
                    height: "48px",
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                standardError: {
                    backgroundColor: "#fdeded",
                    color: "#5f2120",
                },
            },
        },
    },
});

export default LightTheme;
