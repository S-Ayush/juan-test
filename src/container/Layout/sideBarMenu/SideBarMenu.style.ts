import { styled } from "@mui/system";

export const MainDiv = styled("div")({
  height: "fit-content",
  minHeight: "97vh",
  margin: "0.75rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "absolute",
  background:
    "linear-gradient(\n    180deg,\n    rgba(212, 224, 236, 0.31) 0%,\n    rgba(230, 242, 255, 0.36) 47.4%,\n    #edf2f7 100%\n  )",
  backdropFilter: "blur(16px)",
  borderRadius: "10px",
  whiteSpace: "nowrap",
  zIndex: "99",
  letterSpacing: "0",
  transition: "all 0.4s ease-in",
  boxSizing: "border-box",
});

export const LogoDiv = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "1rem 1rem 0rem",
  marginBottom: "1rem",
  "& svg": {
    minWidth: "103px",
    zoom: 0.4,
    height: "90px",
  },
  boxSizing: "border-box",
});

export const LogoTextDiv = styled("div")({
  fontWeight: "800",
  fontSize: "23.7432px",
  lineHeight: "29px",
  color: "#00a1e0",
  marginLeft: "0.25rem",
  overflow: "hidden",
});

export const IconPannelDiv = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const MenuItemWarper = styled("div")({
  margin: "0 0.5rem 1rem",
  padding: "0.75rem",
  borderBottom: "1px solid #dee4ec",
  minHeight: "8rem",
  flexDirection: "column",
  //   alignItems: "center",
  "&:last-child": {
    border: "none",
  },
  "&.center": {
    padding: "0.75rem",
  },
});
export const MenuItemHeader = styled("div")({
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#abadb3",
  marginBottom: "0.75rem",
  padding: "0rem 0.5rem",
});

export const MenuItemContainer = styled("div")({
  display: "flex",
  width: "90%",
  gap: "0.75rem",
  padding: "0.5rem",
  overflow: "hidden",
});
export const MenuItemContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
export const MenuItem = styled("div")({
  padding: "0.4rem",
  display: "flex",
  gap: "0.75rem",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#798ea3",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    cursor: "pointer",
    background: "#00a1e0",
    color: "#ffffff",
    borderRadius: "20px",
    "& path": {
      fill: "white",
    },
  },
  "&.active": {
    background: "#00a1e0",
    color: "#ffffff",
    borderRadius: "20px",
    "& path": {
      fill: "white",
    },
  },
  "&.closedActive": {
    marginLeft: "-6px",
    overflow: "hidden",
    padding: 0,
    gap: 0,
    marginRight: "-12px",
  },
});
export const ImageWarper = styled("div")({
  display: "flex",
  color:"#798ea3",
  "&.imgWrapperActive": {
    height: "42px",
    width: "42px",
    minWidth: "42px",
    background: "#00a1e0",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& path": {
      fill: "white",
    },
  },
});
export const Divider = styled("hr")({
  display: "flex",
});
export const SettingsItemWarper = styled("div")({
  margin: "0 0.5rem 1rem",
  padding: "0.75rem",
  minHeight: "8rem",
  flexDirection: "column",
  marginBottom: "1rem",
  paddingBottom: "1rem",
  "&:last-child": {
    border: "none",
  },
});

export const SettingsContent = styled("div")({
  position: "absolute",
  left: "100%",
  top: "0",
  right: "0",
  zIndex: "9999",
  minWidth: "100%",
  listStyle: "none",
  background: "#00a1e0",
  backdropFilter: "blur(32px)",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  padding: "0.5rem 1rem",
});
export const SettingsSubMenuOptionsWarper = styled("div")({
  position: "relative",
  width: "100%",
  paddingRight: "20px",
});
export const SettingsSubMenuOptions = styled("div")({
  display: "flex",
  gap: "1rem",
  textDecoration: "none",
  padding: "0.5rem",
  color: "#fff",
  "& path": {
    fill: "white",
  },
  "&:hover": {
    cursor: "pointer",
    background: "#0083c4",
    backdropFilter: "blur(32px)",
    borderRadius: "6px",
  },
});
export const SubMenuTitle = styled("div")({
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  color: "white",
  marginBottom: "0.75rem",
  padding: "0rem 0.5rem",
});

export const RightArrowContainer = styled("div")({
  marginLeft: "auto",
});

export const FooterContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  width: "90%",
  padding: "0.25rem 0.75rem",
  position: "absolute",
  bottom: "1rem",
  borderRadius: "12px",
});

export const LogOutWarper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "0.5rem",
  paddingLeft: "1.25rem",
  textDecoration: "none",
  height: "40px",
});

export const LogOutText = styled("div")({
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17px",
  color: "#798ea3",
});
