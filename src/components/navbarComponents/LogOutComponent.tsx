import React from "react";
import RouteDefinitions from "../../router/RouteDefinition";
import { StyledNavLink } from "../../styles/global.style";
import {
  ImageWarper,
  LogOutText,
  LogOutWarper,
} from "../../styles/NavBarComponent.style";
import LogoutIcon from "@mui/icons-material/Logout";

type Props = {
  isOpen: boolean;
};

function LogOutComponent({ isOpen }: Props) {
  return (
    <StyledNavLink to={RouteDefinitions.ROUTE_LOGIN}>
      <LogOutWarper
        onClick={() => {
          localStorage.removeItem("user");
        }}
      >
        <ImageWarper>
          <LogoutIcon color="inherit" />
        </ImageWarper>
        <LogOutText className={!isOpen ? "hidden" : ""}>Logout</LogOutText>
      </LogOutWarper>
    </StyledNavLink>
  );
}

export default LogOutComponent;
