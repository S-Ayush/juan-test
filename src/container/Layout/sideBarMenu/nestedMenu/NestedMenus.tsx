import React, { useState } from "react";
import {
  ImageWarper,
  MenuItem,
  RightArrowContainer,
  SettingsContent,
  SettingsSubMenuOptions,
  SettingsSubMenuOptionsWarper,
  SubMenuTitle,
} from "../SideBarMenu.style";
import { ReactComponent as RightArrow } from "../../../../assests/sidebarAssets/subMenuRightArrow.svg";
import { IMenu } from "../../../../interfaces/LayoutInterface";

type Props = {
  parentMenu: any;
  childMenuList: IMenu[];
  isOpen: boolean;
  setIsOpen: (isopen: boolean) => void;
};

function NestedMenus({ parentMenu, childMenuList, isOpen, setIsOpen }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <SettingsSubMenuOptionsWarper
      onMouseEnter={() => setIsMenuOpen((prev) => !prev)}
      onMouseLeave={() => setIsMenuOpen((prev) => !prev)}
    >
      <MenuItem>
        <ImageWarper>{parentMenu.image}</ImageWarper>
        <div
          style={{
            visibility: isOpen ? "visible" : "hidden",
          }}
        >
          {parentMenu.title}
        </div>
        <RightArrowContainer>
          <RightArrow />
        </RightArrowContainer>
      </MenuItem>
      {isMenuOpen && (
        <SettingsContent>
          {childMenuList?.map((menu: IMenu) => (
            <SettingsSubMenuOptions
              key={menu.title}
              onClick={() => setIsOpen(false)}
            >
              <div>{menu.image}</div>
              <SubMenuTitle>{menu.title}</SubMenuTitle>
            </SettingsSubMenuOptions>
          ))}
        </SettingsContent>
      )}
    </SettingsSubMenuOptionsWarper>
  );
}

export default NestedMenus;
