import React, { useState } from "react";
import {
  IconPannelDiv,
  ImageWarper,
  LogoDiv,
  LogoTextDiv,
  MainDiv,
  MenuItem,
  MenuItemContent,
  MenuItemHeader,
  MenuItemWarper,
  SettingsItemWarper,
} from "./SideBarMenu.style";
import { ReactComponent as CompanyLogo } from "../../../assests/logos/DummyLogo.svg";
import { ReactComponent as UserSettings } from "../../../assests/sidebarAssets/user-settings-icon.svg";
import { theme } from "../../../styles/Theme";
import sidebarMenuLinks from "../../../constants/SideBarMenuLinks";
import { NavLink } from "react-router-dom";
import NestedMenus from "./nestedMenu/NestedMenus";

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
        <LogoTextDiv
          style={{
            visibility: isOpen ? "visible" : "hidden",
          }}
        >
          NEET
        </LogoTextDiv>
      </LogoDiv>
      <IconPannelDiv>
        {/* Main Menu Section */}
        <MenuItemWarper>
          <MenuItemHeader style={{ visibility: isOpen ? "visible" : "hidden" }}>
            Main menu
          </MenuItemHeader>
          <MenuItemContent>
            {sidebarMenuLinks.mainMenuPages.map((page) => (
              <div key={page.title}>
                {/* <NavLink to={page.route} key={page.title}>
                  {({ isActive }) => ( */}
                <MenuItem onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                  <ImageWarper>{page.image}</ImageWarper>
                  <div
                    style={{
                      visibility: isOpen ? "visible" : "hidden",
                    }}
                  >
                    {page.title}
                  </div>
                </MenuItem>
                {/* )}
                </NavLink> */}
              </div>
            ))}
          </MenuItemContent>
        </MenuItemWarper>

        {/* Settings Menu section */}
        <SettingsItemWarper>
          <MenuItemHeader
            style={{
              visibility: isOpen ? "visible" : "hidden",
              marginBottom: isOpen ? "inherit" : "0px",
            }}
          >
            Settings
          </MenuItemHeader>
          <MenuItemContent>
            <NestedMenus
              parentMenu={{ image: <UserSettings />, title: "User Settings" }}
              childMenuList={sidebarMenuLinks.sidebarSettingsPages.userSettings}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </MenuItemContent>
        </SettingsItemWarper>
      </IconPannelDiv>
    </MainDiv>
  );
}

export default SideBarMenu;
