import React, { useState } from "react";
import {
  FooterContainer,
  IconPannelDiv,
  ImageWarper,
  LogoDiv,
  LogoTextDiv,
  LogOutText,
  LogOutWarper,
  MainDiv,
  MenuItem,
  MenuItemContent,
  MenuItemHeader,
  MenuItemWarper,
  SettingsItemWarper,
} from "./SideBarMenu.style";
import { ReactComponent as CompanyLogo } from "../../../assests/logos/DummyLogo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import sidebarMenuLinks from "../../../constants/SideBarMenuLinks";
import { NavLink, useLocation } from "react-router-dom";
import NestedMenus from "./nestedMenu/NestedMenus";
import { StyledNavLink } from "../../../styles/global.style";
import RouteDefinitions from "../../../router/RouteDefinition";

function SideBarMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation().pathname;

  const getActiveMenu = (route: string) => {
    return route.split("/")[0] === location.split("/")[0];
  };

  return (
    <MainDiv
      style={{ width: isOpen ? "286px" : "72px" }}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <LogoDiv>
        <CompanyLogo width={48} height={28} />
        <LogoTextDiv className={!isOpen ? "hidden" : ""}>NEET</LogoTextDiv>
      </LogoDiv>
      <IconPannelDiv>
        {/* Main Menu Section */}
        <MenuItemWarper>
          <MenuItemHeader className={!isOpen ? "hidden" : ""}>
            Main menu
          </MenuItemHeader>
          <MenuItemContent>
            {sidebarMenuLinks.mainMenuPages.map((page) => (
              <div key={page.title}>
                <StyledNavLink to={page.route} key={page.title}>
                  {({ isActive }) => (
                    <MenuItem
                      onClick={() => setIsOpen(!isOpen)}
                      aria-hidden="true"
                      className={`${isActive && !isOpen && "closedActive"} ${
                        isActive && isOpen && "active"
                      }`}
                    >
                      <ImageWarper
                        className={`${
                          isActive && !isOpen && "imgWrapperActive"
                        }`}
                      >
                        {page.image}
                      </ImageWarper>
                      <div className={!isOpen ? "hidden" : ""}>
                        {page.title}
                      </div>
                    </MenuItem>
                  )}
                </StyledNavLink>
              </div>
            ))}
          </MenuItemContent>
        </MenuItemWarper>

        {/* Settings Menu section */}
        <SettingsItemWarper>
          <MenuItemHeader
            className={!isOpen ? "hidden" : ""}
            style={{
              marginBottom: isOpen ? "inherit" : "0px",
            }}
          >
            Settings
          </MenuItemHeader>
          <MenuItemContent>
            <NestedMenus
              parentMenu={{
                image: <AccountCircleIcon color="inherit" />,
                title: "User Settings",
              }}
              childMenuList={sidebarMenuLinks.sidebarSettingsPages.userSettings}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </MenuItemContent>
        </SettingsItemWarper>
      </IconPannelDiv>
      <FooterContainer>
        <StyledNavLink to={RouteDefinitions.ROUTE_LOGIN}>
          <LogOutWarper>
            <ImageWarper>
              <LogoutIcon color="inherit" />
            </ImageWarper>
            <LogOutText className={!isOpen ? "hidden" : ""}>Logout</LogOutText>
          </LogOutWarper>
        </StyledNavLink>
      </FooterContainer>
    </MainDiv>
  );
}

export default SideBarMenu;
