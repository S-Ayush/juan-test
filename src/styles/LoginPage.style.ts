import { styled } from "@mui/system";

export const LoginPageContainer = styled("div")({
  height: "100vh",
  width: "100%",
  background:
    "linear-gradient(\n    180deg,\n    rgba(212, 224, 236, 0.31) 0%,\n    rgba(230, 242, 255, 0.36) 47.4%,\n    #edf2f7 100%\n  )",
});
export const LoginFormSection = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

export const LogoSection = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "100vh",
  justifyContent: "center",
});
export const LogoText = styled("div")({
  fontWeight: "800",
  fontSize: "100px",
  color: "#00a1e0",
  marginLeft: "0.25rem",
  overflow: "hidden",
});
export const LogoImage = styled("div")({
  "& svg": {
    zoom: 2,
  },
});
