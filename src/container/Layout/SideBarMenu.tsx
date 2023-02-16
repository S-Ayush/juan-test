import React, { useState } from "react";
import {
  MainDiv,
  FooterContainer,
  IconPannelDiv,
  LogoDiv,
  LogoTextDiv,
  MenuItemContent,
  MenuItemHeader,
  MenuItemWarper,
  SettingsItemWarper,
} from "../../styles/SideBarMenu.style";
import { ReactComponent as CompanyLogo } from "../../assets/logos/DummyLogo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import sidebarMenuLinks from "../../constants/SideBarMenuLinks";
import { useLocation } from "react-router-dom";
import NestedNavigationMenu from "../../components/navbarComponents/NestedNavigationMenu";
import NavigationMenu from "../../components/navbarComponents/NavigationMenu";
import LogOutComponent from "../../components/navbarComponents/LogOutComponent";

function SideBarMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
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
            {sidebarMenuLinks.mainMenuPages.map((menuObject) => (
              <NavigationMenu
                menuObject={menuObject}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
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
            <NestedNavigationMenu
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
        <LogOutComponent isOpen={isOpen} />
      </FooterContainer>
    </MainDiv>
  );
}

export default SideBarMenu;
